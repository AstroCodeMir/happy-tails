import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from"@/components/Services";
import FurryFriendsCollection from "@/components/FurryFriendsCollection";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <FurryFriendsCollection />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
