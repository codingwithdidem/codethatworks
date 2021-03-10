import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CourseCard = ({
  id,
  title,
  headline,
  description,
  rating,
  num_reviews,
  url,
  is_paid,
  published_title,
  visible_instructors
}) => {
  const BASE_URL = 'https://www.udemy.com';
  return (
    <Link href={`${BASE_URL}${url}`}>
      <div className="relative max-w-2xl bg-white border-1 border-gray-300 p-5 rounded-md  shadow-lg mb-8">
        <div className="flex justify-between">
          <Image
            alt="Udemy Logo"
            className=" rounded-md border-2 border-gray-300"
            src="/udemy.png"
            width={350}
            height={350}
          />
          <div className="flex flex-col ml-6">
            <h4 id="name" className="text-xl font-semibold mb-2">
              {title}
            </h4>
            <h5 className=" text-gray-500 mb-2">{headline}</h5>
            <p className="text-gray-800 mt-2">{`${BASE_URL}${url}`}</p>
            <div className="flex mt-5">
              <p className="">
                {num_reviews} Reviews | {rating} **
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
