import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed z-50 transition-all duration-500 ease-in-out rounded-b-xl 
      ${isScrolled ? 'backdrop-blur-lg bg-white/10' : 'bg-transparent'}`}
    >
      <nav
        className="w-11/12 mx-auto flex justify-between items-center py-6 px-2 font-bold text-white
        transition-all duration-500 ease-in-out "
      >
        <div className="w-64">
          <ul className="flex justify-between space-x-4">
            <li className="hover:opacity-80 transition-opacity duration-200">About US</li>
            <li className="hover:opacity-80 transition-opacity duration-200">Facilities</li>
            <li className="hover:opacity-80 transition-opacity duration-200">Contact</li>
          </ul>
        </div>
        <div className="w-64 flex justify-center text-2xl font-serif hover:scale-105 transition-transform">Logo</div>
        <div className="w-64 flex justify-end">
          <Button
            className="rounded-full py-4 px-8 bg-white/20 text-white font-bold hover:bg-white/30 
            backdrop-blur-sm transition-all duration-300"
          >
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
