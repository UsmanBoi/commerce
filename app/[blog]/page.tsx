// app/[blog]/page.tsx

import { getBlogPosts } from 'lib/shopify'; // Assuming you've implemented getBlogPosts
import Link from 'next/link';

export default async function BlogPage() {
  const blogHandle = 'your-blog-handle'; // Replace with your actual blog handle
  const blogPosts = await getBlogPosts(blogHandle);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.handle}>
            <Link href={`/blog/${post.handle}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
