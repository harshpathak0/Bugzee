import './globals.css';

export const metadata = {
  title: "Bugzee - IT Services",
  description: "We create websites, apps, and more for your business success.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
