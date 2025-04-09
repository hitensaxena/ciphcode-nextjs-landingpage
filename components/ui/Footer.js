import Link from 'next/link';
import { Linkedin, Twitter, Github } from 'lucide-react';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="bg-black text-on-surface-variant border-t border-outline-variant py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-wider text-white">
              CIPH<span className="text-primary">CODE</span>
            </Link>
            <p className="mt-4 text-sm">
              Navigating the digital landscape for success through innovative solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-primary">Web Development</Link></li>
              <li><Link href="#services" className="hover:text-primary">UI/UX Design</Link></li>
              <li><Link href="#services" className="hover:text-primary">Mobile Apps</Link></li>
              <li><Link href="#services" className="hover:text-primary">Digital Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-primary">About</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary">Portfolio</Link></li>
              <li><Link href="#team" className="hover:text-primary">Team</Link></li>
              <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Subscribe to Newsletter</h4>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your Email"
                className="form-input !bg-surface-variant !text-sm !py-2 flex-grow !rounded-md !border-outline"
              />
              <Button variant="primary" className="!py-2 !px-4 !text-xs !rounded-md">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="text-center text-xs border-t border-outline-variant mt-12 pt-6">
          &copy; {new Date().getFullYear()} Ciphcode. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;