import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

export default ({ history }) => {
  return (
    <>
      <Navbar history={history} />
      <Carousel />
    </>
  );
};
