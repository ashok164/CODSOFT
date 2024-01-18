import React from "react";
import Navbar from "./Navbar/Navbar";
import UpperNavbar from "./Navbar/UpperNavbar";
import "../public/Navbar.css";
import "../public/UpperNavbar.css";
import Footer from "./Footer/Footer";
import "../public/Footer.css";
import About from "./AboutuswithPic/About";
import "../public/About.css";
import OurService from "./Services/OurService";
import "../public/Service.css";
import BackgroundImage from "./BackgroundImage/BackgroundImage";
import ImageDetails from "./BackgroundImage/ImageDetails";
import "../Public/Mainimage.css";

function App() {
  return (
    <div>
      <UpperNavbar />
      <Navbar />
      <BackgroundImage
        imageUrl={ImageDetails[0].imageUrl}
        width="100%"
        description={ImageDetails[0].description}
      />
      <Footer />
      <About />
      <OurService />
    </div>
  );
}

export default App;
