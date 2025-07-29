import React from "react";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from "./CourseCard";

const FeaturedCourses = () => {
  return (
    <div className='mb-14 mt-28 px-1'>
      <h1 className='text-center bg-gradient-to-t from-black via-gray-700 to-gray-300 bg-clip-text text-transparent text-5xl font-semibold'>
        Featured Courses
      </h1>
      <p className='text-center text-gray-600 mt-2 mb-8'>
        Explore our wide range of accredited CME courses designed for healthcare
        professionals
      </p>
      <div className='md:w-11/12 py-4 mx-auto rounded-xl flex justify-center my-10 md:bg-slate-50 md:shadow-inner'>
        <Carousel
          opts={{
            align: "start",
          }}
          className='max-w-[310px] md:max-w-5xl'>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <CourseCard />
                </CardContent>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedCourses;
