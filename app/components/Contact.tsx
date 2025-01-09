export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <form className="mt-6 space-y-4 px-4 py-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded"
            rows={4}
          />
          <button className="px-6 py-3 bg-primary text-white rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  