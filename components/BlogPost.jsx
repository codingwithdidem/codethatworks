import React from 'react';
import Link from 'next/link';
import { getFormattedDate } from '@/utils/helpers';

const BlogPost = ({ post }) => {
  return (
    <Link href={`blog/${post.slug}`}>
      <article className="flex flex-col mb-8  max-w-xl w-full p-4">
        <h1 className="font-bold text-purple-800 dark:text-white text-xl">
          {post?.title}
        </h1>
        <p className="text-gray-800 dark:text-gray-400 mb-2">{post?.spoiler}</p>
        <small className="text-gray-500 text-sm">
          {getFormattedDate(post?.date)} • ☕️ {post?.readingTime?.text}
        </small>
      </article>
    </Link>
  );
};

export default BlogPost;
