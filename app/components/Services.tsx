export default function Services() {
  const services = [
    { title: "Mobile App Development", description: "Bugzee is the go-to partner for full-cycle mobile application development services, including prototyping, UX/UI design, programming, cloud deployment, testing and support." },
    { title: "UI/ UX Designing", description: "Years of practice, training, and experience in design have allowed our team to deliver the best UI and UX services to you. We focus on building seamless interaction flows between user and software." },
    { title: "Software Testing", description: "Software testing is the process of verifying a system to identify any errors, gaps, or missing requirements versus the actual requirements. Our trained and experienced Software Testing team makes your product quality a premium one." },
    { title: "Project Rescue services", description: "Get the software project back on track with Softomark. Recovering software projects needs relevant expertise and highly skilled technicians. Fortunately, Softomark has a brilliant team that transforms struggling software products and systems into high-performing solutions." },
    { title: "Student Major/Minor Projects", description: "Welcome, students! Are you looking for a reliable and experienced software development company to help bring your major and minor projects to life? Look no further than bugzee.com." },
    { title: "Digital Marketing", description: "At Bugzee, we specialize in helping businesses succeed in the digital world. Our team of experienced digital marketing professionals will work with you to create a customized strategy that drives growth and generates results. We understand that every business is unique, which is why we take the time to understand your business goals, target audience, and competition." },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold ">Our Services</h2>
      <p className="mt-2 text-lg text-gray-600">
        We provide valuable services for you.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="p-6 bg-white shadow-md rounded">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-4">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
