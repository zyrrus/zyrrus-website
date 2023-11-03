import { redirect } from "next/navigation";
import { getFirstPostBySource } from "~/server/utils/mdx/mdx";

export default async function Articles() {
  const firstArticle = await getFirstPostBySource("articles");
  redirect(`/articles/${firstArticle?.slug}`);
}
