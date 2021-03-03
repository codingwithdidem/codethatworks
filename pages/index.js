import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-row justify-between max-w-5xl mx-auto mb-16">
        <div className="flex flex-col items-start justify-center ">
          <h1 className="font-bold text-3xl md:text-4xl mb-4 tracking-tight text-purple-800">
            Hey there, I'm Didem -
          </h1>
          <p className="font-thin text-2xl md:text-3xl tracking-tight text-purple-800">
            Developer & Youtube Content Creator
          </p>

          <p></p>
        </div>

        <Image src="/blob.svg" alt="Blob" width={400} height={350} />
      </div>
    </Container>
  );
}
