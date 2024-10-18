import { shopifyFetch } from '..'; // Assuming you have a utility for Shopify fetch
import { Article } from '../types';

export const getBlogPostsQuery = `
  query GetBlogPosts($handle: String!) {
    blog(handle: $handle) {
      title
      articles(first: 10) {
        edges {
          node {
            title
            handle
            publishedAt
            excerpt
            contentHtml
          }
        }
      }
    }
  }
`;

export const getBlogArticleQuery = `
  query GetBlogArticle($handle: String!) {
    articleByHandle(handle: $handle) {
      title
      contentHtml
      excerpt
      publishedAt
      handle
    }
  }
`;

export async function getBlogArticle(handle: string) {
  const res = await shopifyFetch<{
    data: {
      articleByHandle: Article;
    };
  }>({
    query: getBlogArticleQuery,
    variables: { handle }, // Pass the article handle as a variable
    tags: ['blog-article'] // Optional: tags for caching or revalidation
  });

  return res.body.data.articleByHandle; // Return the fetched article data
}

export async function getBlogPosts(handle: string) {
  const res = await shopifyFetch<{
    data: {
      blog: {
        articles: {
          edges: { node: Article }[];
        };
      };
    };
  }>({
    query: getBlogPostsQuery,
    variables: { handle },
    tags: ['blog-posts']
  });

  return res.body.data.blog.articles.edges.map((edge) => edge.node);
}
