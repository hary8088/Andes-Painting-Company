import React from "react";
import "./Residential.css";
import Section1Image from "../../../assets/Homepage/c4.webp";
import Section2Image from "../../../assets/Commercial/commercial2.webp";
import Slider from "react-slick";

import Slider1 from "../../../assets/Residential/Slider1.jpg";
import Slider2 from "../../../assets/Residential/Slider2.jpg";
import Slider3 from "../../../assets/Residential/Slider3.jpg";
import Slider4 from "../../../assets/Residential/Slider4.jpg";
import Slider5 from "../../../assets/Residential/Slider5.jpeg";
import Slider6 from "../../../assets/Residential/Slider6.jpg";
import Slider7 from "../../../assets/Residential/Slider7.jpeg";
import Slider8 from "../../../assets/Residential/Slider8.jpeg";
import Slider9 from "../../../assets/Residential/Slider9.jpg";
import Slider10 from "../../../assets/Residential/Slider10.jpg";

function Residential() {
  const services = [
    "SURFACE PREPARATION",
    "PRESSURE WASHING",
    "SCRAPING",
    "SANDING",
    "METAL SURFACES",
    "BRICK | CONCRETE SURFACES",
    "TEXTURING",
    "WOOD REPAIR",
    "WALL PAPER REMOVAL",
    "CROWN MOLDING",
    "EPOXY APPLICATION",
    "DOORS AND CASINGS",
    "PRIMER APPLICATION",
    "CAULK APPLICATION",
    "PATCHING",
    "STUCCO REPAIR",
    "SPECIALITY COATING",
    "SIDING",
    "VARNISH APPLICATION",
    "BASEBOARD INSTALLATION",
    "DRYWALL REPAIR",
    "ACOUSTIC CEILING REMOVAL",
    "CABINETRY",
    "ROLLER/BRUSH/SPRAY PAINTING",
  ];
  const settings = {
    className: "slider variable-width center",
    dots: true,
    centerPadding: "60px",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <>
      <div className="residentialSection1">
        <div className="section1-content">
          <h1>RESIDENTIAL</h1>
          <span>Interior | Exterior</span>
          <div>
            <span>
              Our residential client makes up the foundation of our company. We
              strive to provide the highest quality of service, paying attention
              to every need, detail, and expectation of our homeowners.
            </span>
          </div>
        </div>
        <div
          className="section1-image"
          style={{ width: "100%", height: "60vh" }}
        >
          <img
            src={Section1Image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="residentialSection2">
        <img src={Section2Image} style={{ width: "inherit" }} alt="" />
        <div className="service-title">
          <span>OUR SERVICES</span>
        </div>
      </div>
      {/* <div className="residentialSection3">
        <ul className="serviceList">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div> */}
      <div className="residentialSection4">
        {/* <span>Portfolio</span> */}
        <Slider {...settings}>
          <div>
            <img src={Slider1} alt="Slider 1" />
          </div>
          <div>
            <img src={Slider2} alt="Slider 2" />
          </div>
          <div>
            <img src={Slider3} alt="Slider 3" />
          </div>
          <div>
            <img src={Slider4} alt="Slider 4" />
          </div>
          <div>
            <img src={Slider5} alt="Slider 5" />
          </div>
          <div>
            <div></div>
            <img src={Slider6} alt="Slider 6" />
          </div>
          <div>
            <img src={Slider7} alt="Slider 7" />
          </div>
          <div>
            <img src={Slider8} alt="Slider 8" />
          </div>
          <div>
            <img src={Slider9} alt="Slider 8" />
          </div>
          <div>
            <img src={Slider10} alt="Slider 8" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Residential;
