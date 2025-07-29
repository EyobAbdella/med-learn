import Image from "next/image";
import { Sparkle, GraduationCap, ShieldCheck } from "lucide-react";

export default function GlimpseOfUs() {
  return (
    <section className='bg-slate-50 border border-slate-100 shadow-inner mx-4 sm:mx-8 md:mx-16 rounded-xl py-8 md:py-16 px-4 md:px-12 lg:px-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center'>
        {/* Text Content */}
        <div className='order-2 md:order-1'>
          <p className='text-xs md:text-sm font-medium text-blue-600 uppercase tracking-wide mb-2'>
            A Glimpse of Us
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-3 md:mb-4'>
            Empowering Medical Professionals Through Learning
          </h2>
          <p className='text-sm md:text-base text-gray-600 mb-4 md:mb-6'>
            We provide seamless access to CME-certified courses, real-time
            progress tracking, and direct integration with SCFHS — making your
            learning journey smarter, faster, and trusted.
          </p>

          {/* Value Icons Row */}
          <div className='flex flex-col sm:flex-row gap-4 md:gap-6'>
            <div className='flex items-center gap-2 md:gap-3'>
              <Sparkle className='text-blue-500 w-5 h-5 md:w-6 md:h-6' />
              <span className='text-xs md:text-sm text-gray-700'>
                100% Digital Access
              </span>
            </div>
            <div className='flex items-center gap-2 md:gap-3'>
              <GraduationCap className='text-green-500 w-5 h-5 md:w-6 md:h-6' />
              <span className='text-xs md:text-sm text-gray-700'>
                CME Certified Courses
              </span>
            </div>
            <div className='flex items-center gap-2 md:gap-3'>
              <ShieldCheck className='text-indigo-500 w-5 h-5 md:w-6 md:h-6' />
              <span className='text-xs md:text-sm text-gray-700'>
                SCFHS-Integrated
              </span>
            </div>
          </div>
        </div>

        {/* Visual / Image */}
        <div className='order-1 md:order-2 rounded-lg md:rounded-xl overflow-hidden shadow-sm md:shadow-md'>
          <Image
            src='/image3.jpg'
            alt='About us visual'
            width={600}
            height={400}
            className='w-full h-auto object-cover'
          />
        </div>
      </div>
    </section>
  );
}
