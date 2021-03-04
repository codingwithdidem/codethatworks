import React from 'react';
import { getFormattedDate } from '@/utils/helpers';

const BlogPost = ({ post }) => {
  return (
    <article className="flex flex-col mb-16  max-w-2xl w-full">
      <h1 className="font-bold text-purple-800 text-xl">{post?.title}</h1>
      <p className="text-gray-800">{post?.spoiler}</p>
      <small className="text-gray-500 text-sm">
        {getFormattedDate(post.date)} • ☕️ 5 min read
      </small>
    </article>
  );
};

export default BlogPost;
