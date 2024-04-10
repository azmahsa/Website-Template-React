import { useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Support from "./component/Supports";
import AllInOne from "./component/AllInOne";
import Pricing from "./component/Pricing";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
