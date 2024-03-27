import React from "react";
import "./Commercial.css";
import Section1Image from "../../../assets/Commercial/commercial1.webp";
import Section2Image from "../../../assets/Commercial/commercial2.webp";

import Slider1 from "../../../assets/Commercial/Slider1.jpeg";
import Slider2 from "../../../assets/Commercial/Slider2.jpeg";
import Slider3 from "../../../assets/Commercial/Slider3.jpeg";
import Slider4 from "../../../assets/Commercial/Slider4.jpeg";
import Slider5 from "../../../assets/Commercial/Slider5.jpeg";
import Slider6 from "../../../assets/Commercial/Slider6.jpeg";
import Slider7 from "../../../assets/Commercial/Slider7.jpg";
import Slider8 from "../../../assets/Commercial/Slider8.jpeg";
import Slider from "react-slick";

function Commercial() {
  const services = [
    "WATER BLASTING",
    "PRIMER APPLICATION",
    "SANDING",
    "SCRAPING",
    "STAIN APPLICATION",
    "SPRAY PAINTING",
    "ROLLER",
    "PAINTING DEBRIS REMOVAL",
    "BRUSH PAINTING",
    "WATERPROOFING COATING",
    "DOORS AND CASINGS",
    "WINDOW MASKING",
    "CRACK PATCHING",
    "SEALING",
    "WOOD WORK",
    "TEXTURING",
    "STAIN AND VARNISH",
    "LACQUER AND EPOXY",
    "METAL PAINTING",
    "SPECIALITY COATING",
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
      <div className="commercialSection1">
        <div className="section1-content">
          <h1>COMMERCIAL</h1>
          <span>Interior | Exterior</span>
          <div>
            <span>
              Our dedicated team has experience with a diversified portfolio of
              commercial projects including, but not limited to
            </span>
            <ul>
              <li>Retail | Tenant Improvement</li>
              <li>Commercial Office Spaces</li>
              <li>Industrial | Pipes</li>
              <li>Restaurants | Bars</li>
              <li>Shopping Centers</li>
              <li>Parking lot striping | Curbs</li>
              <li>New Construction ​</li>
              <li>PUTTY APPLICATION</li>
            </ul>
          </div>
        </div>
        <div className="section1-image">
          <img src={Section1Image} alt="" style={{}} />
        </div>
      </div>
      <div className="commercialSection2">
        <img src={Section2Image} style={{ width: "inherit" }} alt="" />
        <div className="service-title">
          <span>OUR SERVICES</span>
        </div>
      </div>
      <div className="commercialSection3">
        <ul className="serviceList">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <div className="commercialSection4">
        <span>Portfolio</span>
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
            <img src={Slider6} alt="Slider 6" />
          </div>
          <div>
            <img src={Slider7} alt="Slider 7" />
          </div>
          <div>
            <img src={Slider8} alt="Slider 8" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Commercial;
