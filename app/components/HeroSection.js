"use client";

import React from "react";
// import Spline from "@splinetool/react-spline/next";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    // <section className='relative h-screen bg-[#00000]'>
    //   <div className='max-w-3xl text-center'>
    //     <h1 className='text-4xl md:text-6xl font-light leading-tight'>
    //       Seamless <br />
    //       <span className='font-normal'>CME Access</span> <br />
    //       <span className='bg-gradient-to-r from-teal-400 to-cyan-700 bg-clip-text text-transparent font-normal'>
    //         for healthcare
    //       </span>
    //     </h1>
    //     <p className='mt-6 text-gray-400 text-base md:text-lg leading-relaxed bg-[#0000]'>
    //       No paperwork. Just expert-led courses when you need them. We manage
    //       the details — you focus on care.
    //     </p>
    //   </div>

    //   <main className=''>
    //     <Spline scene='https://prod.spline.design/JImSiqPzT0w-Vz58/scene.splinecode' />
    //   </main>
    // </section>

    <section className='relative h-screen w-full overflow-hidden'>
      <iframe
        src='https://my.spline.design/reactiveorb-hWkAGn6ZRhv49vFFzQwJMoQc/'
        frameBorder='0'
        className='absolute inset-0 w-full h-full'
      />

      {/* <iframe
        src='https://my.spline.design/reactiveorbcopy-3mxp4MGvp6dIWg24jADM3hGn/'
        frameBorder='0'
        className='absolute inset-0 w-full h-full'
      /> */}
    </section>
  );
}

// import Spline from '@splinetool/react-spline/next';

// export default function Home() {
//   return (
//     <main>
//       <Spline
//         scene="https://prod.spline.design/JImSiqPzT0w-Vz58/scene.splinecode"
//       />
//     </main>
//   );
// }
