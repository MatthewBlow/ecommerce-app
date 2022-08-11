import React from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar /> 
      <Slider />
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  );
};

export default Home;