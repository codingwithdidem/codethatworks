import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CodeBlock, tomorrowNightBlue, atomOneDark } from 'react-code-blocks';
import Container from '@/components/Container';
import { useTheme } from 'next-themes';

export default function Dashboard() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const code = `const instagram = 'https://www.instagram.com/didemk95/'; 
const youtube = 'https://studio.youtube.com/channel/UCfGXEo2uCkVqcIqkIaFNGcA'
<a href="https://www.google.com" /> `;
  return (
    <Container>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-row justify-between mb-16 ">
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
        {/* Code Block */}

        {mounted && (
          <CodeBlock
            text={code}
            language={'javascript'}
            showLineNumbers
            wrapLines
            highlight="1,2,3"
            theme={theme === 'dark' ? atomOneDark : tomorrowNightBlue}
          />
        )}
      </div>
    </Container>
  );
}
