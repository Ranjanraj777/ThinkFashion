import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sliding Discount Banner */}
      <motion.div
        className="bg-yellow-400 text-black font-bold py-2 overflow-hidden whitespace-nowrap text-center text-sm md:text-base"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20,
        }}
      >
        <div className="inline-block px-4">🔥 Flat 50% OFF on Summer Collection! Hurry Up! 🔥</div>
        <div className="inline-block px-4">🔥 Flat 50% OFF on Summer Collection! Hurry Up! 🔥</div>
        <div className="inline-block px-4">🔥 Limited Time Offer — Don’t Miss Out! 🔥</div>
      </motion.div>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-purple-900 via-fuchsia-700 to-pink-600 shadow-2xl sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-6">
            {/* Brand */}
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-widest font-serif text-white drop-shadow-lg animate-pulse">
              Think Fashion
            </h1>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Cart Icon on Mobile */}
              <Link to="/cart" className="text-white hover:text-yellow-300">
                <ShoppingCart size={28} />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10 text-lg font-semibold">
              <Link to="/" className="text-white hover:text-yellow-300 transition duration-200">Home</Link>
              <Link to="/contact" className="text-white hover:text-yellow-300 transition duration-200">Contact</Link>
              <Link to="/login" className="text-white hover:text-yellow-300 transition duration-200">Login</Link>
              <Link to="/signup" className="text-white hover:text-yellow-300 transition duration-200">Signup</Link>

              {/* Cart Icon on Desktop */}
              <Link to="/cart" className="text-white hover:text-yellow-300 transition duration-200">
                <ShoppingCart size={28} />
              </Link>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="md:hidden flex flex-col space-y-4 pb-6 text-lg font-medium">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-300">Home</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-300">Contact</Link>
              <Link to="/login" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-300">Login</Link>
              <Link to="/signup" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-300">Signup</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
