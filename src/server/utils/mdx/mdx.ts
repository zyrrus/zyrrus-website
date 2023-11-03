import fs, { type Dirent } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import {
  sourceRoutes,
  type PostFrontmatter,
  type SourceRoute,
} from "~/server/utils/mdx/types";

const rootDir = path.join(process.cwd(), "src", "app", "(mdx)");
const getSourceDir = (source: SourceRoute) => path.join(rootDir, source);

const isValidMdxPage = (dirent: Dirent) => {
  const { name: fileName, path: filePath } = dirent;

  const subFiles = fs.readdirSync(path.join(filePath, fileName), {
    withFileTypes: true,
  });

  return (
    subFiles.length > 0 && subFiles.some((file) => file.name === "page.mdx")
  );
};

const getAllFiles = (source: SourceRoute): Dirent[] =>
  fs
    .readdirSync(getSourceDir(source), {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory())
    .filter(isValidMdxPage);

export const getFirstPostMetaBySource = async (source: SourceRoute) => {
  const files = getAllFiles(source);

  if (files.length > 0) {
    const { meta } = await getPostMetaBySlug(files[0]!.name, source);
    return meta;
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
  const posts: (PostFrontmatter & { slug: string })[] = await Promise.all(
    getAllFiles(source).map(async (dirent) => {
      const { meta } = await getPostMetaBySlug(dirent.name, source);
      return meta;
    }),
  );

  return posts;
};

export const getAllFeaturedPostsMeta = async () => {
  const featuredPostsDictionary: Record<
    string,
    (PostFrontmatter & {
      slug: string;
    })[]
  > = {};

  await Promise.all(
    sourceRoutes.map(async (source) => {
      const posts = await getAllPostsMeta(source);
      const featuredPosts = posts.filter((post) => post.isFeatured);
      featuredPostsDictionary[source] = featuredPosts;
    }),
  );

  return featuredPostsDictionary;
};
