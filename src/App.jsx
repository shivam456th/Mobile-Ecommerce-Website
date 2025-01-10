import React, { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Header from "./Components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import PhoneSection from "./Pages/PhoneSection.jsx"
import PhoneCase from "./Pages/PhoneSectionCase.jsx";
import PhoneSectionCase from "./Pages/PhoneSectionCase.jsx";
import Footer from "./Components/Footer.jsx";
import WatchSection from "./Pages/WatchSection.jsx";
import Axosories from "./Pages/axosories.jsx";
import SinglePage from "./Components/SinglePage.jsx";
import Apple from "./Pages/Apple.jsx";
import Samsung from "./Pages/Samsung.jsx";
import Nothing from "./Pages/Nothing.jsx";
import Fossil from "./Pages/Fossil.jsx";
import Other from "./Pages/Other.jsx";
import AddToCart from "./Components/AddToCart.jsx";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  

  const App = () => {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="phone" element={<PhoneSection />} />
          <Route path="phoneCase" element={<PhoneSectionCase />} />
          <Route path="watch" element={<WatchSection />} />
          <Route path="accessories" element={<Axosories />} />
          <Route path="apple" element={<Apple />} />
          <Route path="samsung" element={<Samsung />} />
          <Route path="nothing" element={<Nothing />} />
          <Route path="fossil" element={<Fossil />} />
          <Route path="*" element={<Other />} />
          <Route path="addtocart" element={<AddToCart />} />
          <Route path="/data/:id" element={<SinglePage />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </>
    );
  };
export default App;
