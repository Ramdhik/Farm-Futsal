import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Check initial scroll position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-white/30' : ''}`}>
      <nav className="w-11/12 mx-auto flex justify-between py-7 px-2 font-bold text-white">
        <div className="w-64">
          <ul className="flex justify-between">
            <li>About US</li>
            <li>Facilities</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="w-64 flex justify-center">Logo</div>
        <div className="w-64 flex justify-end">
          <Button className="rounded-full py-5 px-8 bg-white text-black font-bold hover:bg-white/90">Login</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
