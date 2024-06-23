import React from "react";
import "./styles.css";
import NavMinor from "../SearchPage/NavMinor/NavMinor";
import Footer from "../MainPage/Footer/Footer";
import SignPart from "./SignPart/SignPart";
import SignPart_mobile from "./SignPart_mobile/SignPart";

export default function SignPage() {
  return (
    <section className="sign_page">
      <NavMinor />
      <SignPart />
      <SignPart_mobile />
      <Footer />
    </section>
  );
}
