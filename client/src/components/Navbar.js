import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useAuth } from "../context/AuthContext"; // your existing hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* Banner here if needed */}
       <div className="bg-yellow-400 text-black font-bold py-2 overflow-hidden whitespace-nowrap text-center text-sm md:text-base">
        <span className="inline-block px-4">🔥 Flat 50% OFF on Summer Collection! Hurry Up! 🔥</span>
        <span className="inline-block px-4">🔥 Flat 50% OFF on Summer Collection! Hurry Up! 🔥</span>
        <span className="inline-block px-4">🔥 Limited Time Offer — Don’t Miss Out! 🔥</span>
      </div>
      <nav className="bg-gradient-to-r from-purple-900 via-fuchsia-700 to-pink-600 shadow-2xl sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-widest font-serif text-white drop-shadow-lg animate-pulse">
              Think Fashion
            </h1>

            <div className="md:hidden flex items-center space-x-4">
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

            <div className="hidden md:flex items-center space-x-10 text-lg font-semibold">
              <Link to="/" className="text-white hover:text-yellow-300 transition duration-200">Home</Link>
              <Link to="/contact" className="text-white hover:text-yellow-300 transition duration-200">Contact</Link>

              {!user ? (
                <>
                  <Link to="/login" className="text-white hover:text-yellow-300 transition duration-200">Login</Link>
                  <Link to="/signup" className="text-white hover:text-yellow-300 transition duration-200">Signup</Link>
                </>
              ) : (
                <>
                  <span className="text-yellow-300 font-bold">Hi, {user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-yellow-300 transition duration-200"
                  >
                    Logout
                  </button>
                </>
              )}

              <Link to="/cart" className="text-white hover:text-yellow-300 transition duration-200">
                <ShoppingCart size={28} />
              </Link>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden flex flex-col space-y-4 pb-6 text-lg font-medium">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-300">Home</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-300">Contact</Link>

              {!user ? (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-300">Login</Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-300">Signup</Link>
                </>
              ) : (
                <>
                  <span className="text-yellow-300 font-bold">Hi, {user.name}</span>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                    className="text-white hover:text-yellow-300 text-left"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
