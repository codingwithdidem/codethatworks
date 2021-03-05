import Image from 'next/image';
import Container from '@/components/Container';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container>
      <article className="prose lg:prose-lg w-full max-w-3xl mx-auto w-full">
        {children}
      </article>
    </Container>
  );
}
