import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Loading from "../../tailwind_components/Loading";

const Navbar = () => {
  return (
    <nav className="w-full py-3 fixed top-0">
      <div className=" bg-white px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap px-14">
          <div className="ml-4 mt-2 flex items-center">
            <img
              src={logo}
              alt="logo"
              width={50}
              height={50}
            />
            <span className="text-xl font-extrabold text-gray-950 leading-6 ml-2">Mk Agency</span>
          </div>
          <div id="header-nav-links" className="ml-4 mt-2 flex-shrink-0 flex items-center">
            <Link to="/casos" className="inline-flex font-bold text-gray-950 leading-6 mx-3 border-b-2 border-white hover:border-orange-600 transition duration-300 ease-in-out">Casos</Link>
            <Link to="/servicios" className="inline-flex font-bold text-gray-950 leading-6 mx-3 border-b-2 border-white hover:border-orange-600 transition duration-300 ease-in-out">Servicios</Link>
            <Link to="/carreras" className="inline-flex font-bold text-gray-950 leading-6 mx-3 border-b-2 border-white hover:border-orange-600 transition duration-300 ease-in-out">Carreras</Link>
            <Link to="/blog" className="inline-flex font-bold text-gray-950 leading-6 mx-3 border-b-2 border-white hover:border-orange-600 transition duration-300 ease-in-out">Blog</Link>
            <Link to="/Nosotros" className="inline-flex font-bold text-gray-950 leading-6 mx-3 border-b-2 border-white hover:border-orange-600 transition duration-300 ease-in-out">Nosotros</Link>
            <Link to="/contacto" className="inline-flex font-bold text-gray-950 leading-6 mx-3 border-b-2 border-white hover:border-orange-600 transition duration-300 ease-in-out">Contacto</Link>
            <button
              type="button"
              className="text-white ml-6 relative inline-flex items-center w-full rounded-sm border border-transparent bg-orange-600 px-3 py-[6px] text-sm font-bold hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 tr"
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
