"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold tracking-wider text-white">
            CIPH<span className="text-primary">CODE</span>
          </Link>
          
          <div className="hidden sm:flex items-center space-x-4">
            <Link href="#portfolio" className="px-3 py-2 text-sm hover:text-primary">
              Case Studies
            </Link>
            <Link href="#process" className="px-3 py-2 text-sm hover:text-primary">
              Working Process
            </Link>
            <Link href="#team" className="px-3 py-2 text-sm hover:text-primary">
              Team
            </Link>
            <Link href="#testimonials" className="px-3 py-2 text-sm hover:text-primary">
              Testimonials
            </Link>
            <Link 
              href="#contact" 
              className="btn btn-green ml-4 whitespace-nowrap !py-2 !px-5 !text-xs !rounded-md"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-md text-on-background hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-surface">
          <div className="pt-2 pb-4 space-y-1 px-2">
            <Link
              href="#portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-on-surface hover:text-primary hover:bg-surface-variant"
            >
              Case Studies
            </Link>
            <Link
              href="#process"
              className="block px-3 py-2 rounded-md text-base font-medium text-on-surface hover:text-primary hover:bg-surface-variant"
            >
              Working Process
            </Link>
            <Link
              href="#team"
              className="block px-3 py-2 rounded-md text-base font-medium text-on-surface hover:text-primary hover:bg-surface-variant"
            >
              Team
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-on-surface hover:text-primary hover:bg-surface-variant"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block w-full text-center px-3 py-3 mt-2 rounded-md text-base font-medium bg-primary text-on-primary hover:brightness-110"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;