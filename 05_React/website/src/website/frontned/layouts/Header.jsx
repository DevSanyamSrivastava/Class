import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone, Landmark} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "font-semibold text-secondary"
      : "transition hover:text-secondary";

  return (
    <nav className="  ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          ABC School
        </NavLink>
        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={linkStyle}>
            Home
        
          </NavLink>
          <NavLink to="/about-us" className={linkStyle}>
            About 
          </NavLink>
         
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/20 px-6 w-50 py-4 md:hidden">
          <div className="flex flex-col gap-4">

            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={linkStyle}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              onClick={() => setIsOpen(false)}
              className={linkStyle}
            >
              About 
            </NavLink>

 

          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;