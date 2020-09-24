import React from "react";
import MapaServicios from "./MapaServicios";
import Servicio from "./Servicio";

export default () => {
  return (
    <>
      <div
        id="servicios"
        style={{ backgroundColor: "#efefef", paddingTop: "3em" }}
      >
        <MapaServicios />
        <Servicio />
      </div>
    </>
  );
};
