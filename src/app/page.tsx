import Header from "./components/Header/header";
import Herosection from "./components/Herosection/hero";
import Footer from "./components/Footer/footer";
import React from "react";

const Homepage = () => {
  return(
    <div className="Header">
      <Header></Header>
      <Herosection></Herosection>
      <Footer></Footer>
    </div>
  )
}
export default Homepage;
