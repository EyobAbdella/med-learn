import NavBar from "./components/navigation/NavBar";
import HeroSection from "./components/HeroSection";
import CourseSearchFilter from "./components/CourseSearchFilter";

import FAQ from "./components/FAQ";
import WhyChooseUs from "./WhyChooseUs";
import Testimonial from "./components/Testimonial";
import GlimpseOfUs from "./components/GlimpseOfUs";
import Categories from "./components/Categories";
import CmePackages from "./components/CmePackages";
import Footer from "./components/Footer";
import CallToActionButton from "./components/CallToActionButton";
import FeaturedCourses from "./components/FeaturedCourses";
import SignupPage from "./components/auth/Signup";
import LoginPage from "./components/auth/Login";

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

      {/* Auth */}
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
    </div>
  );
}
