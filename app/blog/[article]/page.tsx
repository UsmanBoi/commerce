import { getBlogArticle } from 'lib/shopify/queries/blog'; // Adjust path if necessary
import { Article } from 'lib/shopify/types'; // Assuming you have this type
import { Metadata } from 'next';

interface BlogPageProps {
  params: { article: string };
}

interface ArticleProps {
  article: Article;
}

// Fetch the metadata for the article
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const article = await getBlogArticle(params.article);
  return {
    title: article?.title || 'Blog Article',
    description: article?.excerpt || 'Blog post'
  };
}

// This function fetches the blog article directly in the component
export default async function BlogArticlePage({ params }: BlogPageProps) {
  const article = await getBlogArticle(params.article); // Fetch the article based on the handle (from URL)

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.excerpt}</p>
      <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
      <p>Published on: {new Date(article.publishedAt).toLocaleDateString()}</p>
      {/* Add more article details as needed */}
    </div>
  );
}
