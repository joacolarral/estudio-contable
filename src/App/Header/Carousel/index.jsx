import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic1 from "../../../assets/images/rsz_impuestos.jpg";
import pic2 from "../../../assets/images/rsz_contabilidad.jpg";
import pic3 from "../../../assets/images/rsz_laboral.jpg";
import pic4 from "../../../assets/images/rsz_sociedades.jpg";

const styles_p = {
  position: "absolute",
  top: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 1,
  backgroundColor: "transparent",
  fontSize: "2rem",
  color: "#fafafa",
  letterSpacing: "5px",
};

function Service({ pic, service }) {
  return (
    <div style={{ backgroundImage: pic }}>
      <img
        src={pic}
        alt={`${service.toLowerCase()}`}
        style={{ height: "520px", objectFit: "cover", opacity: 0.6 }}
      />
      <p style={styles_p} className="legend">
        {service}
      </p>
    </div>
  );
}

export default () => {
  return (
    <div data-aos={"zoom-in"}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        infiniteLoop
        autoPlay
      >
        <Service pic={pic1} service={"IMPUESTOS"} />
        <Service pic={pic2} service={"CONTABILIDAD"} />
        <Service pic={pic3} service={"LABORAL"} />
        <Service pic={pic4} service={"SOCIEDADES"} />
      </Carousel>
    </div>
  );
};
