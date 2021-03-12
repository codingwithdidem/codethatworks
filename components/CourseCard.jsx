import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdStar } from 'react-icons/md';

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
    <div className=" overflow-hidden h-auto w-full bg-white border-1 border-gray-300 p-4 md:p-5 rounded-md  shadow-lg mb-8">
      <Link href={`${BASE_URL}${url}`}>
        <div className="md:flex justify-between items-center">
          <div className=" mb-4 md:mb-0 w-full w-20 md:w-80 h-60 md:h-40 relative ">
            <Image
              src="/udemy.png"
              sizes="100%"
              layout="fill"
              className="rounded"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col md:ml-6 ">
            <h4 id="name" className="text-base md:text-xl font-semibold mb-2">
              {title}
            </h4>
            <h5 className=" text-gray-500 mb-2">{headline}</h5>
            <span className=" text-sm md:text-lg text-gray-800 mt-2">{`${BASE_URL}${url}`}</span>
            <div className="flex mt-5">
              <p className="mr-3">{num_reviews} Reviews</p>
              <p className="flex items-center ml-3">
                <MdStar className="mr-2" />
                {rating?.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
