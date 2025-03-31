import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./containers/errors/Error404";
import { Provider } from "react-redux";
import Home from "./containers/pages/Home"
import store from "./store";

import Cases from "./containers/pages/Cases";
import Services from "./containers/pages/Services";
import Careers from "./containers/pages/Careers";
import Blog from "./containers/pages/Blog";
import Contact from "./containers/pages/Contact";
import About from "./containers/pages/About";

const app = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
            <Routes>
              <Route path="*" element={<Error404/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/servicios" element={<Services/>}/>
              <Route path="/casos" element={<Cases/>}/>
              <Route path="/carreras" element={<Careers/>}/>
              <Route path="/contacto" element={<Contact/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/nosotros" element={<About/>}/>
            </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default app;
