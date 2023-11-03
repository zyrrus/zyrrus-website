import { redirect } from "next/navigation";
import { getFirstPostMetaBySource } from "~/server/utils/mdx/mdx";

export default async function Articles() {
  const firstArticle = await getFirstPostMetaBySource("articles");
  redirect(`/articles/${firstArticle?.slug}`);
}
