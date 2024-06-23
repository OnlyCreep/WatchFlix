import React from "react";
import "./styles.css";
import Navbar from "./Navbar/Navbar";
import MainTitle from "./MainTitle/MainTitle";
import Slaider from "./Slaider/Slaider";
import Selection from "./Selection/Selection";
import SubInfo from "./SubInfo/SubInfo";
import Footer from "./Footer/Footer";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <MainTitle />
      <Slaider />
      <Selection />
      <SubInfo />
      <Footer />
    </>
  );
}
