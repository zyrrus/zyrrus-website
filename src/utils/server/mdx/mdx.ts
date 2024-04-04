import fs, { type Dirent } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import {
  type PostFrontmatter,
  type SourceRoute,
} from "~/utils/server/mdx/types";

const rootDir = path.join(process.cwd(), "src", "app", "(mdx)");
const getSourceDir = (source: SourceRoute) =>
  path.join(rootDir, source, "(posts)");

const isValidMdxPage = (dirent: Dirent) => {
  const { name: fileName, path: filePath } = dirent;

  const subFiles = fs.readdirSync(path.join(filePath, fileName), {
    withFileTypes: true,
  });

  return (
    subFiles.length > 0 && subFiles.some((file) => file.name === "page.mdx")
  );
};

const getAllFiles = async (
  source: SourceRoute,
): Promise<(PostFrontmatter & { slug: string })[]> => {
  const files = fs
    .readdirSync(getSourceDir(source), {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory())
    .filter(isValidMdxPage);

  const posts = await Promise.all(
    files.map(async (dirent) => {
      const { meta } = await getPostMetaBySlug(dirent.name, source);
      return meta;
    }),
  );

  return posts
    .filter((post) => !post.hidden)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getFirstPostMetaBySource = async (source: SourceRoute) => {
  const posts = await getAllFiles(source);

  if (posts[0] !== undefined) {
    return posts[0];
  }
};

export const getPostMetaBySlug = async (slug: string, source: SourceRoute) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(getSourceDir(source), realSlug, "page.mdx");

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX<PostFrontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async (source: SourceRoute) => {
  const posts = await getAllFiles(source);

  return posts;
};
