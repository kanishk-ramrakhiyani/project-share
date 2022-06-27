// import logo from './logo.svg';
// import "./App.css";
import Home from "./pages/Home.js";
// import About from "./pages/About";
import AddEdit from "./pages/AddEdit";
import About from "./pages/About";
import View from "./pages/View";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
          {/* <Route path="/update/:id" element={<AddEdit/>} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
