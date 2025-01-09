import Link from 'next/link';

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">From Our Blog</h2>
      <p className="mt-4">Stay updated with the latest trends and tips.</p>
      <Link href="/blog">
        <button className="mt-6 px-6 py-3 bg-primary text-white rounded hover:bg-blue-600">
          Read Blog
        </button>
      </Link>
    </section>
  );
}
