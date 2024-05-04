import React from "react";
import "./MultiFamily.css";
import Section1Image from "../../../assets/MultiFamily/Section1Image.webp";
import Section2Image from "../../../assets/Commercial/commercial2.webp";
import Slider from "react-slick";
import Slider1 from "../../../assets/MultiFamily/Slider1.jpeg";
import Slider2 from "../../../assets/MultiFamily/Slider2.jpeg";
import Slider3 from "../../../assets/MultiFamily/Slider3.jpg";
import Slider4 from "../../../assets/MultiFamily/Slider4.jpeg";
import Slider5 from "../../../assets/MultiFamily/Slider5.jpeg";
import Slider6 from "../../../assets/MultiFamily/Slider6.jpeg";
import Slider7 from "../../../assets/MultiFamily/Slider7.jpeg";
import Slider8 from "../../../assets/MultiFamily/Slider8.jpg";
function MultiFamily() {
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
    "SPECIALIs COATING",
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
      <div className="multifamilySection1">
        <div className="section1-content">
          <h1>MULTI-FAMILY</h1>
          <span>Interior | Exterior</span>
          <div>
            <span>
              We partner with national developers, homeowner associations,
              property management firms, and general contractors to efficiently
              execute small and large scale projects. We understand the demands
              and expectations associated with the construction of multi-family
              communities. Our team has experience with the following, but not
              limited to:
            </span>
            <ul>
              <li>Remodel | Rehab</li>
              <li>Private Developments</li>
              <li>Affordable Housing </li>
              <li>Design Build </li>
              <li>New Construction </li>
            </ul>
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
      <div className="multifamilySection2">
        <img src={Section2Image} style={{ width: "inherit" }} alt="" />
        <div className="service-title">
          <span>OUR SERVICES</span>
        </div>
      </div>
      {/* <div className="multifamilySection3">
        <ul className="serviceList">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div> */}
      <div className="multifamilySection4">
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
            <img src={Slider6} alt="Slider 6" />
          </div>
          <div>
            <img src={Slider7} alt="Slider 7" />
          </div>
          <div>
            <img src={Slider8} alt="Slider 8" />
          </div>
          <div></div>
        </Slider>
      </div>
    </>
  );
}

export default MultiFamily;
