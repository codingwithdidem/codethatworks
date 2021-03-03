import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Container = ({ children }) => {
  return (
    <div className="bg-white p-8">
      <Head>
        <title>Code That Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex flex-row justify-between items-center mx-auto max-w-5xl w-full ">
        <div>Dark Mode</div>
        <div className="flex flex-row items-center">
          <Link href="/">
            <a className="p-1 sm:p-4  text-gray-900">Dashboard</a>
          </Link>
          <Link href="/blog">
            <a className="p-1 sm:p-4 text-gray-900">Blog</a>
          </Link>
          <Link href="/about">
            <a className="p-1 sm:p-4 text-gray-900">About</a>
          </Link>
        </div>
      </nav>

      <main className="m-16 ">{children}</main>
    </div>
  );
};

export default Container;
