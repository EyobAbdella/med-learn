// app/components/WhyChooseUs.tsx

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, HeartPulse, House } from "lucide-react";

const benefits = [
  {
    icon: <GraduationCap className='text-blue-500 w-6 h-6' />,
    title: "A modern educational platform",
    desc: "Mulhim is your trusted and accredited digital gateway to smoothly access courses with Continuing Medical Education (CME) hours — ensuring you a distinguished and effective experience in advancing your professional career",
    color: "bg-blue-100",
  },
  {
    icon: <HeartPulse className='text-red-500 w-6 h-6' />,
    title: "Top Health Educators",
    desc: "Learn from Top Experts and Healthcare Professionals in Saudi Arabia Mulhim collaborates with a distinguished group of specialists to deliver high-quality, up-to-date, and scientifically grounded medical content—designed to keep pace with the latest advancements in the healthcare field",
    color: "bg-purple-100",
  },
  {
    icon: <House className='text-purple-500 w-6 h-6' />,
    title: "Flexible Courses for Your Convenience",
    desc: "Access the Mulhim platform from anywhere, on your own schedule—no need for traditional classroom sessions. Our platform is designed to give you maximum comfort and flexibility, allowing you to learn at your own pace and in a way that suits your professional needs",
    color: "bg-red-100",
  },
];

export default function WhyChooseUs() {
  return (
    <section className='mx-4 sm:mx-8 md:mx-16 py-16 bg-slate-50 rounded-xl shadow-inner'>
      <h2 className='text-center text-2xl sm:text-3xl font-bold text-teal-950 mb-6'>
        Why Choose Us?
      </h2>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
        {/* Left Column: Benefits */}
        <div className='w-full max-w-lg'>
          <div className='flex flex-col gap-4'>
            {benefits.map((item, index) => (
              <Card
                key={index}
                className='flex items-start gap-4 p-4 shadow-sml'>
                <div className={`p-2 rounded-md ${item.color}`}>
                  {item.icon}
                </div>
                <CardContent className='p-0'>
                  <h4 className='text-md font-semibold'>{item.title}</h4>
                  <p className='text-sm text-muted-foreground'>{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className='w-full max-w-md'>
          <Image
            src='/whychooseus.png'
            alt='Dentist with patient'
            width={400}
            height={400}
            className='border-4 border-blue-200 shadow-xl mx-auto lg:ml-auto'
            style={{
              borderTopLeftRadius: "40px",
              borderBottomRightRadius: "40px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
