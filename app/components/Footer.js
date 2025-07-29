import React from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className='relative bg-gradient-to-b from-slate-950 via-teal-950 to-slate-950 text-white px-6 py-20 overflow-hidden'>
      {/* Strong glassy glow in center */}
      <div className='absolute top-5 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-white/10 blur-[120px] rounded-full pointer-events-none z-0' />

      {/* Footer Content */}
      <div className='relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm'>
        {/* About Mulhim */}
        <div className='md:col-span-2'>
          <div className='mb-4'>
            <Image
              src='/logo (1).png'
              alt='Mulhim Logo'
              width={200}
              height={200}
              className='mb-4'
            />
            <p className='text-gray-400'>
              <b>Mulhim</b> <br />
              Achieve your CME credits through Mulhim – flexible, accessible,
              and accredited by the Saudi Health Commission. Perfectly aligned
              with the Mumaris Plus requirements.
            </p>
          </div>
        </div>

        {/* Mulhim Links */}
        <div>
          <h3 className='font-semibold text-white mb-4'>Mulhim</h3>
          <ul className='space-y-2 text-gray-400'>
            <li>
              <a href='Pages/about-us' className='hover:text-white'>
                About Us
              </a>
            </li>
            <li>
              <a href='Pages/vision-and-mission' className='hover:text-white'>
                Vision and Mission
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='font-semibold text-white mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-gray-400'>
            <li>
              <a href='Pages/training-plan' className='hover:text-white'>
                Training Plan
              </a>
            </li>
            <li>
              <a
                href='Pages/evaluation-of-courses-satisfaction'
                className='hover:text-white'>
                Evaluation of Courses Satisfaction
              </a>
            </li>
            <li>
              <a
                href='Pages/academic-integrity-policy'
                className='hover:text-white'>
                Academic Integrity Policy
              </a>
            </li>
            <li>
              <a href='Pages/terms-and-conditions' className='hover:text-white'>
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Moved Up */}
        <div>
          <h3 className='font-semibold text-white mb-4'>Follow Us</h3>
          <div className='flex gap-4 mt-2'>
            <a
              href='https://www.facebook.com/mulhim.sa'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-blue-500 transform transition duration-300 hover:-translate-y-1'>
              <Facebook size={20} />
            </a>
            <a
              href='https://twitter.com/mulhim'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-blue-400 transform transition duration-300 hover:-translate-y-1'>
              <Twitter size={20} />
            </a>
            <a
              href='https://www.instagram.com/mulhim'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-pink-500 transform transition duration-300 hover:-translate-y-1'>
              <Instagram size={20} />
            </a>
            <a
              href='https://www.youtube.com/@mulhim'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-red-600 transform transition duration-300 hover:-translate-y-1'>
              <Youtube size={20} />
            </a>
            <a
              href='https://www.linkedin.com/company/mulhim'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-blue-300 transform transition duration-300 hover:-translate-y-1'>
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className='relative z-10 max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-10'>
        <div>
          <h3 className='font-semibold text-white mb-4'>Reach Us</h3>
          <div className='space-y-4 text-gray-400'>
            <div className='flex items-start gap-3'>
              <Mail className='w-5 h-5 mt-1 text-white' />
              <a href='mailto:support@mulhim.sa' className='hover:text-white'>
                Support@mulhim.sa
              </a>
            </div>
            <div className='flex items-start gap-3'>
              <MapPin className='w-5 h-5 mt-1 text-white' />
              <p>Riyadh, Kingdom of Saudi Arabia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='relative z-10 max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500'>
        <p>© 2025 Mulhim. All Rights Reserved.</p>
        <a
          href='https://mulhim.sa/Terms-and-condition'
          className='hover:text-white mt-2 md:mt-0'>
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
