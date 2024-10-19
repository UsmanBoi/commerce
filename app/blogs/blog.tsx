// app/[blog]/page.tsx
import { getBlogPosts } from 'lib/shopify/queries/blog';
import { Article } from 'lib/shopify/types';
import { GetServerSideProps } from 'next';

interface BlogProps {
  articles: Article[];
}

const BlogPage = ({ articles }: BlogProps) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.handle}>
            <h2>{article.title}</h2>
            <img src={article.image?.src} alt={article.image?.altText} />
            <p>{article.excerpt}</p>
            <p>{article.authorV2?.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await getBlogPosts('newblog'); // Replace 'your-blog-handle' with actual handle
  return {
    props: { articles }
  };
};

export default BlogPage;
