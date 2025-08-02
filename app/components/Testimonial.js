// components/Testimonials.tsx

import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className='py-20 bg-gray-50 text-gray-800'>
      <div className='text-center mb-10'>
        <div className='text-sm font-medium text-gray-500 mb-2'>
          🎓 Learner Stories
        </div>
        <h2 className='text-4xl font-bold tracking-tight'>
          What Our Learners Say
        </h2>
        <p className='text-gray-500 mt-2'>
          Join thousands of healthcare professionals advancing their knowledge
          through accredited CME courses.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-6 px-4 max-w-5xl mx-auto'>
        <div className='bg-white rounded-2xl shadow p-6 flex flex-col justify-center'>
          <p className='text-lg text-gray-700 mb-4'>
            “The platform&apos;s CME courses were exactly what I needed to renew
            my SCFHS license. The structure was clear, content was up to date,
            and the certificate was instantly available after completion.”
          </p>
          <div className='text-2xl text-gray-600'>❝❞</div>
        </div>

        <div className='rounded-2xl overflow-hidden'>
          <Image
            src='/package2.png'
            alt='Happy CME student'
            width={600}
            height={300}
            className='w-full object-cover h-full'
          />
        </div>
      </div>

      <div className='grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-4'>
        {[
          {
            name: "Dr. Sara A.",
            title: "Cardiologist, Riyadh",
            quote:
              "The SCFHS integration made tracking CME hours effortless. I completed three courses in one week!",
            stars: 5,
            avatar: "/image3.jpg",
          },
          {
            name: "Nabil Y.",
            title: "General Practitioner, Jeddah",
            quote:
              "Excellent quality content. The quizzes at the end really helped reinforce what I learned.",
            stars: 5,
            avatar: "/package1.jpeg",
          },
          {
            name: "Layla M.",
            title: "Medical Student, Dammam",
            quote:
              "This platform helped me prepare for my licensing exam and earn CME credits along the way.",
            stars: 4,
            avatar: "/package3.jpeg",
          },
        ].map(({ name, title, quote, stars, avatar }, i) => (
          <div key={i} className='bg-white p-6 rounded-2xl shadow-md space-y-4'>
            <div className='flex items-center gap-1 text-yellow-500'>
              {Array.from({ length: stars }).map((_, i) => (
                <Star key={i} size={16} fill='currentColor' />
              ))}
            </div>
            <p className='text-gray-700 text-sm'>{quote}</p>
            <div className='flex items-center gap-3 mt-4'>
              <Image
                src={avatar}
                alt={name}
                width={40}
                height={40}
                className='rounded-full'
              />
              <div>
                <p className='font-semibold'>{name}</p>
                <p className='text-xs text-gray-500'>{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='grid md:grid-cols-3 text-center mt-16 gap-6 text-gray-700 font-medium'>
        <div>
          <p className='text-2xl font-bold'>500+</p>
          <p>Courses Completed</p>
        </div>
        <div>
          <p className='text-2xl font-bold'>98%</p>
          <p>Certification Success Rate</p>
        </div>
        <div>
          <p className='text-2xl font-bold'>8+</p>
          <p>Years Supporting CME Learners</p>
        </div>
      </div>
    </section>
  );
}
