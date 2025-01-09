// import Link from 'next/link';

// export default function Header() {
//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between px-6 py-4">
//         <h1 className="text-2xl font-bold text-primary">Bugzee</h1>
//         <nav>
//           <ul className="flex space-x-6">
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="#services">Services</Link></li>
//             <li><Link href="#clients">Clients</Link></li>
//             <li><Link href="/blog">Blog</Link></li>
//             <li><Link href="#contact">Contact</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }



'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary">Bugzee</h1>

        {/* Menu button (hamburger) */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>

        {/* Navigation links */}
        <nav
          className={`absolute md:static top-16 right-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row md:items-center md:space-x-6 md:opacity-100 transition-opacity ${
            menuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-start md:items-center md:ml-auto">
            <li className="border-b md:border-none">
              <Link
                href="/"
                className="block py-2 px-4 text-gray-800 hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li className="border-b md:border-none">
              <Link
                href="#services"
                className="block py-2 px-4 text-gray-800 hover:text-primary"
              >
                Services
              </Link>
            </li>
            <li className="border-b md:border-none">
              <Link
                href="#clients"
                className="block py-2 px-4 text-gray-800 hover:text-primary"
              >
                Clients
              </Link>
            </li>
            <li className="border-b md:border-none">
              <Link
                href="/blog"
                className="block py-2 px-4 text-gray-800 hover:text-primary"
              >
                Blog
              </Link>
            </li>
            <li className="border-b md:border-none">
              <Link
                href="#contact"
                className="block py-2 px-4 text-gray-800 hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
