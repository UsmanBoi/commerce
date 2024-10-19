import { shopifyFetch } from 'lib/shopify';
import { getBlogArticleQuery } from 'lib/shopify/queries/blog';

interface ArticleProps {
  article: {
    title: string;
    contentHtml: string;
    excerpt: string;
    publishedAt: string;
    image?: {
      src: string;
      altText: string;
    };
    authorV2?: {
      name: string;
    };
  };
}

const BlogArticlePage = async ({ params }: { params: { blog: string; article: string } }) => {
  // Fetch article data
  const response = await shopifyFetch({
    query: getBlogArticleQuery,
    variables: {
      blogHandle: params.blog,
      articleHandle: params.article
    }
  });

  // Assuming response.body contains the `data`
  const { data } = response.body as { data: any };

  const article = data?.blogByHandle?.articleByHandle;

  if (!article) {
    return <p className="text-center text-gray-500">Article not found.</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-4 text-center text-4xl font-bold">{article.title}</h1>
      <p className="mb-4 text-center text-sm text-gray-500">
        {new Date(article.publishedAt).toLocaleDateString()} by {article.authorV2?.name}
      </p>
      {article.image?.src && (
        <img
          src={article.image.src}
          alt={article.image.altText || article.title}
          className="mb-8 h-64 w-full rounded-md object-cover"
        />
      )}
      <div
        className="prose mx-auto max-w-none"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />
    </div>
  );
};

export default BlogArticlePage;
