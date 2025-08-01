import NavBar from "./components/navigation/NavBar";
import HeroSection from "./components/HeroSection";
import CourseSearchFilter from "./components/CourseSearchFilter";

import FAQ from "./components/FAQ";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonial from "./components/Testimonial";
import GlimpseOfUs from "./components/GlimpseOfUs";
import Categories from "./components/Categories";
import CmePackages from "./components/CmePackages";
import Footer from "./components/Footer";
import FeaturedCourses from "./components/FeaturedCourses";
import CallToActionButton from "./components/CallToActionButton";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <WhyChooseUs />

      <CourseSearchFilter />
      <FeaturedCourses />
      <Testimonial />
      <Categories />
      <CmePackages />
      <FAQ />
      <GlimpseOfUs />
      <CallToActionButton />
      <Footer />
    </div>
  );
}
