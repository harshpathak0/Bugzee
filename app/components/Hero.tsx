import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            We design and build digital products bringing new ideas to life.
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Bugzee specializes in custom solution development that has stagnant
            growth. Our clients come to us to improve their websites,
            application, software, and drive qualified leads and opportunities
            to the site. Softomark works with B2B companies to improve their
            website and marketing campaigns to create growth opportunities. Our
            ultimate goal is to foster more opportunities for our clients.
          </p>
          <button className="mt-8 px-6 py-3 bg-dark text-white rounded hover:bg-gray-800">
            Know More
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src="/assets/hero.png"
            alt="Hero Illustration"
            width={500}
            height={400}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
