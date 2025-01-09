import Image from 'next/image';

const blogs = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        date: 'Mar 16, 2020',
        category: 'Marketing',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        image: '/assets/conversion-rate.jpg',
    },
    {
        id: 2,
        title: 'The future of AI in business',
        date: 'Apr 10, 2021',
        category: 'Technology',
        description:
            'Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel.',
        author: {
            name: 'Sarah Connor',
            role: 'Lead Developer',
            image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        image: '/assets/Ai-future.jfif',
    },
    {
        id: 3,
        title: 'Understanding SEO basics',
        date: 'May 23, 2022',
        category: 'SEO',
        description:
            'Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta voluptate aliquid vel.',
        author: {
            name: 'John Doe',
            role: 'SEO Expert',
            image: 'https://images.unsplash.com/photo-1735682056675-41f66a21ec31?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        image: '/assets/seo.png',
    },
    {
        id: 4,
        title: 'Understanding SEO basics',
        date: 'May 23, 2022',
        category: 'SEO',
        description:
            'Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta voluptate aliquid vel.',
        author: {
            name: 'John Doe',
            role: 'SEO Expert',
            image: 'https://images.unsplash.com/photo-1735682056675-41f66a21ec31?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        image: '/assets/seo.png',
    },
];

export default function BlogSection() {
    return (
        <section className="bg-gray-100 sm:py-10">
            <div className="mx-auto max-w-8xl px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto text-center ">
                    <h2 className="text-4xl font-bold ">From the Blog</h2>
                    <p className="mt-2 text-lg text-gray-600 mb-12">
                        Stay updated with the latest trends and tips.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 mb-12 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={blog.date} className="text-gray-700">
                                    {blog.date}
                                </time>
                                <a
                                    href="#"
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-gray-100"
                                >
                                    {blog.category}
                                </a>
                            </div>
                            <div className="group relative">
                                <div className="relative h-48 w-full rounded-lg overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span className="absolute inset-0"></span>
                                        {blog.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-md text-gray-700">
                                    {blog.description}
                                </p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img
                                    src={blog.author.image}
                                    alt={blog.author.name}
                                    className="h-10 w-10 rounded-full bg-gray-50"
                                />
                                <div className="text-sm">
                                    <p className="font-semibold text-gray-900">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            {blog.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{blog.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
