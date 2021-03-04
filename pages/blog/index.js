import Link from 'next/link';
import Container from '@/components/Container';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import BlogPost from '@/components/BlogPost';

export default function Blog({ posts }) {
  return (
    <Container>
      <div className="flex flex-col items-center max-w-5xl mx-auto w-full p-16">
        {posts.length > 0 &&
          posts.map((post) => <BlogPost key={post.slug} post={post} />)}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
}
