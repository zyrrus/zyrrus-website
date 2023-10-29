import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { type SourceRoute } from "~/server/utils/mdx/types";

const rootDir = path.join(process.cwd(), "src", "app", "(mdx)");
const getSourceDir = (source: SourceRoute) => path.join(rootDir, source);

export const getFirstPostBySource = async <
  Frontmatter = Record<string, unknown>,
>(
  source: SourceRoute,
) => {
  const files = fs.readdirSync(getSourceDir(source));

  if (files.length > 0) {
    const { meta } = await getPostBySlug<Frontmatter>(files[0]!, source);
    return meta;
  }
};

export const getPostBySlug = async <Frontmatter = Record<string, unknown>>(
  slug: string,
  source: SourceRoute,
) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(getSourceDir(source), realSlug, "page.mdx");

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async <Frontmatter = Record<string, unknown>>(
  source: SourceRoute,
) => {
  const files = fs
    .readdirSync(getSourceDir(source), {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory());
  const posts: (Frontmatter & { slug: string })[] = [];

  for (const { name, path: filePath } of files) {
    const subFiles = fs.readdirSync(path.join(filePath, name), {
      withFileTypes: true,
    });
    if (subFiles.length === 1 && subFiles[0]!.name === "page.mdx") {
      const { meta } = await getPostBySlug<Frontmatter>(name, source);
      posts.push(meta);
    }
  }

  return posts;
};
