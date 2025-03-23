
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home"
import { Provider } from "react-redux";
import store from "./store";


const app = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="*" element={<Error404/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

export default app;
