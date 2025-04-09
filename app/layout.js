import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Ciphcode - Navigating the Digital Landscape',
  description: 'Digital agency specializing in web development, design, and digital solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  );
}
