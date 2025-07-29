import Image from "next/image";
import { BadgePercent } from "lucide-react";

export default function CmePackages() {
  const packages = [
    {
      title: "Essential CME Bundle",
      cmeHours: 15,
      priceBefore: "$199",
      priceAfter: "$149",
      discount: "25% OFF",
      image: "/package1.jpeg",
    },
    {
      title: "Advanced Physician Pack",
      cmeHours: 30,
      priceBefore: "$299",
      priceAfter: "$225",
      discount: "25% OFF",
      image: "/package2.png",
    },
    {
      title: "Quick CME Starter",
      cmeHours: 8,
      priceBefore: "$99",
      priceAfter: "$75",
      discount: "24% OFF",
      image: "/package3.jpeg",
    },
  ];

  return (
    <section className='bg-slate-50 border border-slate-100 shadow-inner mx-4 sm:mx-8 md:mx-16 rounded-xl py-8 md:py-16 px-4 md:px-12 lg:px-24'>
      <div className='text-center mb-8 md:mb-12'>
        <p className='text-xs md:text-sm font-medium text-blue-600 uppercase tracking-wide'>
          CME Packages
        </p>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-3 md:mb-4'>
          Learn More. Save More.
        </h2>
        <p className='text-sm md:text-base text-gray-600 max-w-2xl mx-auto'>
          Specially curated CME course bundles at discounted rates — earn more
          hours for less.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className='bg-white rounded-lg md:rounded-xl shadow-sm md:shadow-md overflow-hidden transition hover:shadow-md md:hover:shadow-lg cursor-pointer'>
            <div className='relative h-40 sm:h-48 w-full'>
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className='object-cover'
              />
              <div className='absolute top-3 right-3 sm:top-4 sm:right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1'>
                <BadgePercent className='w-3 h-3 sm:w-4 sm:h-4' />
                {pkg.discount}
              </div>
            </div>

            <div className='p-3 sm:p-4'>
              <h3 className='text-base sm:text-lg font-semibold text-gray-800 mb-1'>
                {pkg.title}
              </h3>
              <p className='text-xs sm:text-sm text-gray-500 mb-2'>
                {pkg.cmeHours} CME Hours
              </p>
              <div className='flex items-center gap-2'>
                <span className='text-xs sm:text-sm text-gray-400 line-through'>
                  {pkg.priceBefore}
                </span>
                <span className='text-sm sm:text-base text-blue-600 font-semibold'>
                  {pkg.priceAfter}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
