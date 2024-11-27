import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { MyDiv } from "./App.styled";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <MyDiv>
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </MyDiv>
    </Router>
  );
}

export default App;
