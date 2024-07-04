import React from "react";
import "./styles.css";
import Footer from "../MainPage/Footer/Footer";
import SignPart from "./SignPart/SignPart";
import SignPart_mobile from "./SignPart_mobile/SignPart";
import Navbar from "../Navbar/Navbar";

export default function SignPage() {
    document.title = "WatchFlix - войти | регистрация"

  return (
    <section className="sign_page">
      <Navbar />
      <SignPart />
      <SignPart_mobile />
      <Footer />
    </section>
  );
}
