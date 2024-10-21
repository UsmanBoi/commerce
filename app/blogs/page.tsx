import { getAllBlogs } from 'lib/shopify/queries/blog';

interface BlogProps {
  blogs: {
    title: string;
    handle: string;
    articles: {
      edges: {
        node: {
          title: string;
          excerpt: string;
          handle: string;
          image?: { src: string; altText: string };
        };
      }[];
    };
  }[];
}

const BlogPage = async () => {
  // Fetch all blogs and their articles
  const blogs = await getAllBlogs();

  // Sort blogs: first by the number of articles (descending), then by recency
  const sortedBlogs = blogs
    .filter((blog) => blog.articles.edges.length > 0) // Exclude blogs with no articles
    .sort((a, b) => b.articles.edges.length - a.articles.edges.length);

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-10 text-center text-4xl font-bold">Our Blogs</h1>
      {sortedBlogs.map((blog) => (
        <div key={blog.handle} className="mb-12">
          <h2 className="mb-5 text-3xl font-semibold">{blog.title}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blog.articles.edges.map(({ node: article }, index) => (
              <div
                key={article.handle}
                className={`overflow-hidden rounded-lg bg-white shadow-lg ${index >= 4 ? 'opacity-75' : ''}`}
              >
                {article.image && (
                  <img
                    src={article.image.src}
                    alt={article.image.altText}
                    className="h-48 w-full object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold">{article.title}</h3>
                  <p className="mb-5 text-gray-700">{article.excerpt}</p>
                  <p>Published at &nbsp; {article.publishedAt.slice(0, 10)}</p>
                  <a
                    href={`/blogs/${blog.handle}/${article.handle}`}
                    className="text-blue-500 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
            {blog.articles.edges.length > 3 && (
              <div className="mt-4 text-center">
                <a href={`/blogs/${blog.handle}`} className="text-blue-500 hover:underline">
                  Show All
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
