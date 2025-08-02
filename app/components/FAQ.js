import { Stethoscope } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className='mx-auto w-full px-4 sm:px-6 md:w-11/12 my-4 md:my-8'>
      <div className='flex items-center gap-2 justify-center py-2 px-4'>
        <Stethoscope className='w-5 h-5' />
        <p className='text-sm md:text-base'>FAQs</p>
      </div>
      <h1 className='text-center bg-gradient-to-t from-black via-gray-700 to-gray-300 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-semibold mb-4'>
        Understanding Mulhim&apos;s Courses
      </h1>

      <div className='border border-slate-200 mt-4 sm:mt-7 px-4 sm:px-6 md:px-10 py-4 sm:py-5 mx-0 sm:mx-4 md:mx-10 rounded-lg'>
        <Accordion
          type='single'
          collapsible
          className='w-full'
          defaultValue='item-1'>
          <AccordionItem
            value='item-1'
            className='bg-slate-100 shadow-inner px-3 sm:px-4 rounded-lg my-2'>
            <AccordionTrigger className='text-left text-sm sm:text-base'>
              How are CME hours managed, and how will I receive them in my
              Mumaris Plus account?
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-3 sm:gap-4 text-balance text-sm sm:text-base'>
              <p>
                Once you complete all course requirements on the Mulhim
                platform, your accredited CME hours will be added to your
                Mumaris Plus account shortly afterward. Upon course completion,
                Mulhim automatically updates your records, ensuring a seamless
                integration that keeps your professional profile up to date
                without requiring any additional action from you.
              </p>
              <p>
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and
                experts.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value='item-2'
            className='bg-slate-100 shadow-inner px-3 sm:px-4 rounded-lg my-2'>
            <AccordionTrigger className='text-left text-sm sm:text-base'>
              Who are Mulhim courses designed for, and how long are they?
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-3 sm:gap-4 text-balance text-sm sm:text-base'>
              <p>
                Mulhim courses are designed for all healthcare practitioners
                across medical specialties, including physicians, nurses,
                pharmacists, and other healthcare professionals seeking to
                expand their knowledge and fulfill Continuing Medical Education
                (CME) requirements. Each course is structured to deliver
                valuable content efficiently, with flexible durations that suit
                your professional schedule.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value='item-3'
            className='bg-slate-100 shadow-inner px-3 sm:px-4 rounded-lg my-2'>
            <AccordionTrigger className='text-left text-sm sm:text-base'>
              How Can I Enroll in Courses on the Mulhim Platform?
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-3 sm:gap-4 text-balance text-sm sm:text-base'>
              <div className='space-y-4 sm:space-y-6'>
                <p className='text-gray-700'>
                  Enrolling in courses on{" "}
                  <span className='font-semibold text-primary'>Mulhim</span> is
                  straightforward. Here&apos;s how you can start:
                </p>

                <ul className='list-none space-y-3 sm:space-y-4'>
                  <li className='flex flex-col sm:flex-row items-start gap-1 sm:gap-2'>
                    <span className='text-primary font-semibold sm:min-w-[130px]'>
                      Create an Account:
                    </span>
                    <span className='text-gray-700'>
                      Sign up on the Mulhim platform by providing basic
                      information and professional classification details.
                    </span>
                  </li>
                  <li className='flex flex-col sm:flex-row items-start gap-1 sm:gap-2'>
                    <span className='text-primary font-semibold sm:min-w-[130px]'>
                      Browse Courses:
                    </span>
                    <span className='text-gray-700'>
                      Explore our wide selection of courses tailored for
                      healthcare professionals. You can view course
                      descriptions, instructor information, and CME hour
                      details.
                    </span>
                  </li>
                  <li className='flex flex-col sm:flex-row items-start gap-1 sm:gap-2'>
                    <span className='text-primary font-semibold sm:min-w-[130px]'>
                      Choose and Enroll:
                    </span>
                    <span className='text-gray-700'>
                      Once you find a course that meets your needs, click{" "}
                      <strong>Enroll</strong> and follow the steps to complete
                      your registration and payment.
                    </span>
                  </li>
                  <li className='flex flex-col sm:flex-row items-start gap-1 sm:gap-2'>
                    <span className='text-primary font-semibold sm:min-w-[130px]'>
                      Start Learning:
                    </span>
                    <span className='text-gray-700'>
                      After enrolling, you can begin your course immediately—or
                      whenever it suits your schedule. All course materials and
                      resources are accessible from your dashboard.
                    </span>
                  </li>
                </ul>

                <p className='text-sm sm:text-base'>
                  Start Your Journey with Mulhim in Just a Few Easy Steps.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
