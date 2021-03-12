import Link from 'next/link';
import { getAllCourses } from '@/lib/udemy';
import Container from '@/components/Container';
import CourseCard from '@/components/CourseCard';

export default function Courses({ courses }) {
  return (
    <Container>
      <div className="max-w-3xl mx-auto mt-4 md:mt-16 w-full">
        <div className="flex flex-col items-center">
          {courses.length > 0 &&
            courses.map((course) => <CourseCard key={course.id} {...course} />)}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const courses = await getAllCourses();

  console.log(courses);
  return {
    props: {
      courses
    }
  };
}
