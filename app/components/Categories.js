import {
  Stethoscope,
  Brain,
  Syringe,
  HeartPulse,
  BookOpen,
  Activity,
} from "lucide-react";

export default function Categories() {
  const categories = [
    {
      icon: <Stethoscope className='text-blue-500 w-6 h-6' />,
      label: "General Medicine",
    },
    { icon: <Brain className='text-purple-500 w-6 h-6' />, label: "Neurology" },
    {
      icon: <Syringe className='text-red-500 w-6 h-6' />,
      label: "Anesthesiology",
    },
    {
      icon: <HeartPulse className='text-pink-500 w-6 h-6' />,
      label: "Cardiology",
    },
    {
      icon: <BookOpen className='text-yellow-500 w-6 h-6' />,
      label: "Medical Education",
    },
    {
      icon: <Activity className='text-green-500 w-6 h-6' />,
      label: "Emergency Medicine",
    },
  ];

  return (
    <section className='bg-slate-50 border border-slate-100 shadow-inner mx-4 sm:mx-8 md:mx-16 rounded-xl py-12 px-4 md:px-12 lg:px-24'>
      <div className='text-center mb-10'>
        <p className='text-sm font-medium text-blue-600 uppercase tracking-wide'>
          Categories
        </p>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2'>
          Explore by Specialization
        </h2>
        <p className='text-gray-600 text-sm sm:text-base'>
          Courses are organized by field to help you focus on what matters most
          to your career.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className='bg-white rounded-xl shadow-md p-4 sm:p-6 flex items-center gap-4 hover:shadow-lg transition cursor-pointer'>
            <div className='p-2 sm:p-3 bg-slate-100 rounded-md'>{cat.icon}</div>
            <span className='text-sm sm:text-base text-gray-800 font-medium'>
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
