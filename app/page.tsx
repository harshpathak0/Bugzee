import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
// import Clients from './components/Clients';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Portfolio />;
      {/* <Clients /> */}
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
}
