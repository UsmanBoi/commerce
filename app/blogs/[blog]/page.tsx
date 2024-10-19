import { getBlogPosts } from 'lib/shopify/queries/blog';
import { Article } from 'lib/shopify/types';

interface BlogProps {
  articles: Article[];
}

const BlogPage = async ({ params }: { params: { blog: string } }) => {
  // Fetch blog posts (server-side behavior)
  const articles = await getBlogPosts(params.blog);

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Blog</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div
              key={article.handle}
              className="rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              {article.image?.src && (
                <img
                  src={article.image.src}
                  alt={article.image.altText || article.title}
                  className="mb-4 h-48 w-full rounded-md object-cover"
                />
              )}
              <h2 className="mb-2 text-2xl font-semibold">{article.title}</h2>
              <p
                className="mb-4 text-gray-700"
                dangerouslySetInnerHTML={{ __html: article.excerpt }}
              />
              {article.authorV2?.name && (
                <p className="mb-4 text-sm text-gray-500">By {article.authorV2.name}</p>
              )}
              <a
                href={`/blogs/${params.blog}/${article.handle}`}
                className="text-olive-600 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No articles available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
