import { Provider, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/index";
import { MyDiv } from "./App.styled";
// import { selectUser } from "../store/selectors/userSelectors";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
