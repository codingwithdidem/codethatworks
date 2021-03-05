import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';

export default function Dashboard() {
  return (
    <Container>
      <div className="flex flex-row justify-between max-w-3xl mx-auto">
        <div className="flex flex-col items-start justify-center ">
          <h1 className="font-bold text-3xl md:text-4xl mb-2 tracking-tight text-purple-800 dark:text-white">
            Hey there, I'm Didem -
          </h1>
          <p className="font-thin text-2xl md:text-3xl tracking-tight text-purple-800 dark:text-white mb-10">
            React Developer & Youtuber
          </p>

          <p className="text-xl text-gray-800 dark:text-white ">
            You have no idea what I'll be posting here.
            <span className="italic font-medium ml-1"> So do I.</span>
          </p>
          <p className="text-xl text-gray-800 dark:text-white">
            Anyway, It's nice to have you here! :)
          </p>
        </div>

        <Image
          className="flex-none"
          src="/blob.svg"
          alt="Blob"
          width={300}
          height={350}
        />
      </div>
    </Container>
  );
}
