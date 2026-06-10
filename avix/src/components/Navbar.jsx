import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"
import logo from "../assets/images/final_logo.webp"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* ================= Scroll Shadow ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ================= Active Link Style ================= */
  const navLinkClass = ({ isActive }) =>
    `transition hover:text-blue-600 ${
      isActive ? "text-blue-600 font-semibold" : ""
    }`

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="AVIX Studio"
              className="h-14 md:h-16 lg:h-20 w-auto object-contain hover:scale-105 transition"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-lg font-medium">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>

            {/* PRICING DROPDOWN */}
            <div className="relative group">

              <span className="cursor-pointer hover:text-blue-600 transition">
                Pricing
              </span>

              <div
                className="
                  absolute left-0 top-full pt-4
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-200 ease-out
                "
              >
                <div className="w-64 bg-white shadow-xl rounded-xl py-4">

                  <NavLink
                    to="/pricing/social"
                    className="block px-6 py-2 hover:bg-gray-100 transition"
                  >
                    Social Media Pricing
                  </NavLink>

                  <NavLink
                    to="/pricing/website"
                    className="block px-6 py-2 hover:bg-gray-100 transition"
                  >
                    Website Pricing
                  </NavLink>

                  {/* ✅ NEW 3D OPTION */}
                  <NavLink
                    to="/pricing/3d"
                    className="block px-6 py-2 hover:bg-gray-100 transition"
                  >
                    3D Animation Pricing
                  </NavLink>

                </div>
              </div>

            </div>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Contact
            </NavLink>

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-6 pb-6 text-center text-lg font-medium">

            <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/services" onClick={() => setIsOpen(false)} className={navLinkClass}>
              Services
            </NavLink>

            <NavLink to="/pricing/social" onClick={() => setIsOpen(false)} className={navLinkClass}>
              Social Media Pricing
            </NavLink>

            <NavLink to="/pricing/website" onClick={() => setIsOpen(false)} className={navLinkClass}>
              Website Pricing
            </NavLink>

            {/* ✅ NEW 3D OPTION (Mobile) */}
            <NavLink to="/pricing/3d" onClick={() => setIsOpen(false)} className={navLinkClass}>
              3D Animation Pricing
            </NavLink>

            <NavLink to="/about" onClick={() => setIsOpen(false)} className={navLinkClass}>
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-black text-white px-6 py-2 rounded-lg w-fit mx-auto"
            >
              Contact
            </NavLink>

          </div>
        )}

      </nav>
    </header>
  )
}

export default Navbar
