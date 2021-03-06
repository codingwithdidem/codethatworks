import axios from 'axios';

export const getAllCourses = async () => {
  try {
    const { data } = await axios.get(
      'https://www.udemy.com/instructor-api/v1/taught-courses/courses/?fields%5Bcourse%5D=@all',
      {
        headers: {
          Authorization: `Bearer ${process.env.UDEMY_API_KEY}`
        }
      }
    );
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
