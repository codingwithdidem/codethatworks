import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import ThemeSwitcher from '@/components/ThemeSwitcher';
const Container = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark p-8 ">
      <Head>
        <title>Code That Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex flex-row justify-between items-center mx-auto max-w-3xl w-full ">
        <ThemeSwitcher />
        <div className="flex flex-row items-center">
          <Link href="/">
            <a className="p-1 sm:p-4  text-gray-900 dark:text-white">
              Dashboard
            </a>
          </Link>
          <Link href="/blog">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-white">Blog</a>
          </Link>
          <Link href="/courses">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-white">Courses</a>
          </Link>
        </div>
      </nav>

      <main className="bg-white dark:bg-dark p-16">{children}</main>
    </div>
  );
};

export default Container;
