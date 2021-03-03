import Link from 'next/link';
import Container from '@/components/Container';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export default function Blog({ posts }) {
  return (
    <Container>
      <h1>hello</h1>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
}
