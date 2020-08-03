import React, { useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { Provider } from "./context";
import Aos from "aos";
import "aos/dist/aos.css";
import SuccessMessage from "./Modal";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });

  return (
    <>
      <Provider>
        <Header />
        <Body />
        <Footer />
        <SuccessMessage />
      </Provider>
    </>
  );
}

export default App;
