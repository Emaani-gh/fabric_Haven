import { useState } from "react";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-800">FabricHaven</h1>

        {/* Center Menu (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "underline decoration-amber-800 underline-offset-4"
                      : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          <button className="hover:text-indigo-600 transition-colors duration-200">
            <Search size={22} />
          </button>
          <button className="hover:text-indigo-600 transition-colors duration-200">
            <ShoppingCart size={22} />
          </button>
          <button className="hover:text-indigo-600 transition-colors duration-200">
            <User size={22} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Icons (Mobile) */}
            <div className="flex items-center space-x-6 mt-4">
              <Search size={22} className="text-gray-700" />
              <ShoppingCart size={22} className="text-gray-700" />
              <User size={22} className="text-gray-700" />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
