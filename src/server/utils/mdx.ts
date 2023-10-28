import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export const sourceRoutes = ["articles", "projects"] as const;
export type SourceRoute = (typeof sourceRoutes)[number];

const rootDir = path.join(process.cwd(), "src", "app", "[source]");
const getSourceDir = (source: SourceRoute) => path.join(rootDir, source);

export const getPostBySlug = async <Frontmatter = Record<string, unknown>>(
  slug: string,
  source: SourceRoute,
) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(getSourceDir(source), `${realSlug}.mdx`);

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
  const files = fs.readdirSync(getSourceDir(source));

  const posts: (Frontmatter & { slug: string })[] = [];

  for (const file of files) {
    const { meta } = await getPostBySlug<Frontmatter>(file, source);
    posts.push(meta);
  }

  return posts;
};
