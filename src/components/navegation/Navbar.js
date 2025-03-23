import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";


const Navbar = () => {
  return (
    <nav className="w-full py-3 shadow-md fixed top-0">
      <div className=" bg-white px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap px-14">
          <div className="ml-4 mt-2 flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              width={50}
              height={50}
            />
            <h1 className="text-lg font-bold">RK Agency</h1>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0 text-sm font-medium flex items-center gap-4">
            <Link to="/casos" className="text-sm">Casos</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/carreras">Carreras</Link>
            <Link to="/podcast">Podcast</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contacto">Contacto</Link>
            <button
              type="button"
              className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Hire us
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
