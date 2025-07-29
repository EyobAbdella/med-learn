import React from "react";

const CallToActionButton = () => {
  return (
    <div className='flex justify-center my-14'>
      <button className='relative inline-block px-20 py-3 font-semibold text-white bg-primary rounded-lg overflow-hidden group transition-all duration-300 ease-in-out shadow-md hover:shadow-lg'>
        <span className='absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out'></span>
        <span className='relative group-hover:text-primary transition-colors duration-300 ease-in-out'>
          Enroll Now
        </span>
      </button>
    </div>
  );
};

export default CallToActionButton;
