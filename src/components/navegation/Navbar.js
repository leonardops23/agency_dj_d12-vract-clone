import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Loading from "../../tailwind_components/Loading";
import { useEffect, useState } from "react";

const navLinks = [
  { id: 1, name: "Casos", href: "/casos" },
  { id: 2, name: "Servicios", href: "/servicios" },
  { id: 3, name: "Carreras", href: "/carreras" },
  { id: 4, name: "Blog", href: "/blog" },
  { id: 5, name: "Nosotros", href: "/nosotros" },
  { id: 6, name: "Contacto", href: "/contacto" },
];

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleSroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleSroll);
    return () => window.removeEventListener('scroll', handleSroll)
  }, []);

  const opacity = Math.min(scrollPosition/200, 1);

  return (
    <nav className="top-0 fixed z-20 w-full flex justify-center" style={{
      backgroundColor: `rgba(255, 255, 255, ${opacity})`,
      boxShadow: opacity > 0 ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      zIndex: 20
    }}>
    <div className="backdrop-blur-sm py-3 sm:py-3 w-full max-w-6xl">
      <div className="flex w-full items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              width={50}
              height={50}
            />
            <span className="text-xl font-extrabold text-gray-950 leading-6 ml-2">Mk Agency</span>
          </Link>
          <div id="header-nav-links" className="flex-shrink-0 flex items-center overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className="inline-flex font-bold text-gray-950 leading-6 mx-3 transition whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            <button
              type="button"
              className="text-white ml-6 relative inline-flex items-center rounded-sm border border-transparent bg-orange-600 px-3 py-[6px] text-sm font-bold hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 whitespace-nowrap"
            >
              <span className="mx-3">Hire Us</span>
              <Loading />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(Navbar);
