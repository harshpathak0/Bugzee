export default function Clients() {
    const clients = ['Google', 'Apple', 'Microsoft', 'Amazon'];
  
    return (
      <section id="clients" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold">Our Clients</h2>
        <div className="mt-10 flex justify-center gap-10">
          {clients.map((client, idx) => (
            <div key={idx} className="text-lg font-semibold">
              {client}
            </div>
          ))}
        </div>
      </section>
    );
  }
  