import {
  type SourceRoute,
  sourceRoutes,
  getPostBySlug,
  getAllPostsMeta,
} from "~/server/utils/mdx";

interface Props {
  params: { source: SourceRoute; slug: string };
}

// Throw 404 on pages that don't match static params
export const dynamicParams = false;
export async function generateStaticParams() {
  const params = await Promise.all(
    sourceRoutes.map(async (source) => {
      const posts = await getAllPostsMeta(source);
      return posts.map(({ slug }) => ({ source, slug }));
    }),
  );

  return params.flat();
}

// export async function generateMetadata({ params }: Props) {
//   const { meta } = await getPostBySlug(params.slug, params.source);
//   return { title: meta.title };
// }

export default async function Source({ params }: Props) {
  const { content } = await getPostBySlug(params.slug, params.source);

  return (
    <main className="prose dark:prose-invert prose-neutral container mb-24 mt-10">
      {content}
    </main>
  );
}
