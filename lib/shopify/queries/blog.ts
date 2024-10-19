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
          image {
            src
            altText
          }
          authorV2 {
            name
          }
        }
      }
    }
  }
}
`;

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

  const { data } = res.body;

  // Explicitly type 'edge' inside the map function
  return data.blog.articles.edges.map((edge: { node: Article }) => edge.node);
}

export const getBlogArticleQuery = `
 query GetBlogArticle($blogHandle: String!, $articleHandle: String!) {
    blogByHandle(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        title
        contentHtml
        excerpt
        publishedAt
        handle
        image {
          src
          altText
        }
        authorV2 {
          name
        }
      }
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

  // Access `data` from `res.body`.
  const { data } = res.body as any; // Type assertion to avoid TypeScript errors.

  return data.articleByHandle; // Return the fetched article data
}
