import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BuySection from "./components/BuySection";
import RentSection from "./components/RentSection";
import GallerySection from "./components/GallerySection";
import BlogsSection from "./components/BlogsSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";


export default function WanderingKashmir() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-800 min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BuySection />
        <RentSection />
        <GallerySection />
        <BlogsSection />
        <ContactSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}