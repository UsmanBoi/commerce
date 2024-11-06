import { getAllBlogs } from 'lib/shopify/queries/blog';
import React from 'react';

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
                  <h3 className="mb-2 text-xl font-bold capitalize md:text-2xl 2xl:text-3xl">
                    {article.title}
                  </h3>

                  <p className="relative line-clamp-2 overflow-hidden text-sm text-gunMetal-300 sm:min-h-10 2xl:text-base">
                    {article.excerpt ? article.excerpt : 'No summary'}
                    <span
                      className="absolute bottom-0 right-0 h-4 w-72"
                      style={{
                        background: 'linear-gradient(to left, #fff, transparent)'
                      }}
                    />
                  </p>
                  {/* {article.excerpt ? (
                    <p className="mb-5 text-gray-700">{article.excerpt}</p>
                  ) : (
                    <p>No summary</p>
                  )} */}
                  <React.Fragment></React.Fragment>
                  <p className="mb-1 mt-4">
                    Published at &nbsp; {article.publishedAt.slice(0, 10)}
                  </p>
                  <a
                    href={`/blogs/${blog.handle}/${article.handle}`}
                    className="font-semibold text-gunMetal-300 underline underline-offset-2 transition-all duration-200 ease-in-out hover:tracking-wider"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
            {blog.articles.edges.length > 3 && (
              <div className="mt-4 text-center">
                <a
                  href={`/blogs/${blog.handle}`}
                  className="text-gunMetal-300underline font-semibold underline-offset-2 transition-all duration-200 ease-in-out hover:tracking-wider"
                >
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
