import Navbar from "../layout/Navbar";
import Hero from "../home/Hero";
import Trusted from "../home/Trusted";
import WhyChooseUs from "../home/WhyChooseUs";
import Products from "../home/Products";
import Process from "../home/Process";
import CTA from "../home/CTA";
import Footer from "../layout/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <WhyChooseUs />
      <Products />
       <Process />
       <CTA/>
       <Footer/>
    </>
  );
};

export default Home;