import React, { useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App(props) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });

  return (
    <>
      <Header history={props.history} />
      <Body />
      <Footer />
    </>
  );
}

export default App;
