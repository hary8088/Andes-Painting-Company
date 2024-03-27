import React from "react";
import Carousel from "react-bootstrap/Carousel";
import C1 from "../../../assets/Homepage/c1.webp";
import C2 from "../../../assets/Homepage/c2.webp";
import C3 from "../../../assets/Homepage/c3.webp";
import C4 from "../../../assets/Homepage/c4.webp";
import image1 from "../../../assets/Homepage/image1.jpeg";
import SI from "../../../assets/Homepage/home2.webp";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const servicesList = [
    {
      name: "Commercial",
      link: "/commercial",
    },
    {
      name: "Residential",
      link: "/residential",
    },
    {
      name: "Public-Work",
      link: "/public-work",
    },
    {
      name: "Multi-Family",
      link: "/multi-family",
    },
  ];
  return (
    <>
      <div className="carousel">
        <Carousel style={{ width: "100%" }}>
          <Carousel.Item interval={1000}>
            <img src={C1} alt="" style={{ width: "100%", height: "100%" }} />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={C2} alt="" style={{ width: "100%", height: "100%" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={C3} alt="" style={{ width: "100%", height: "100%" }} />
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={C4} alt="" style={{ width: "100%", height: "100%" }} />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="whoWeAre">
        <div className="whoWeAreImage">
          <img src={image1} alt="" style={{ width: "100%" }} />
        </div>
        <div className="content">
          <h1>WHO WE ARE</h1>
          <p
            style={{
              // backgroundColor: "aqua",
              textWrap: "wrap",
              alignContent: "center",
              textAlign: "justify",
            }}
          >
            R&L Quality Painting is an SBA 8(a) family owned business located in
            Brea, California with more than 20 years of experience in the
            painting industry. We specialize in residential, multi-family,
            commercial and public projects. Our high quality products, unmatched
            work ethic, honesty, and emphasis on customer satisfaction have made
            us the first choice in Southern California.
          </p>
        </div>
      </div>
      <div className="ourVision">
        <div
          style={{
            width: "50%",
            textAlign: "end",
            padding: "0 3% 0 20%",
            alignContent: "center",
          }}
        >
          <h1>OUR VISION</h1>
        </div>
        <div style={{ width: "50%", textAlign: "start" }}>
          <p
            style={{
              padding: "0 20% 0 5%",
              textWrap: "wrap",
              alignContent: "center",
              textAlign: "justify",
            }}
          >
            We understand our clients and their needs. It is our vision to
            provide the highest quality work and an exceptional experience.
            Painting is an investment; therefore, we work closely with our
            clients to make sure we offer the most competitive pricing for any
            project. Give us a call today!
          </p>
        </div>
      </div>
      <div className="serviceWrapper">
        <div className="innerServiceWrapper" style={{ width: "50%" }}>
          <h1>SERVICES AVAILABLE</h1>
          <div className="services">
            {servicesList.map((service) => (
              <div
                key={service.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3>{service.name}</h3>
                <span>Interior | Exterior</span>
                <Link
                  to={service.link}
                  style={{ textDecoration: "none", paddingTop: "15%" }}
                >
                  <span>Learn More</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="serviceImage" style={{ width: "50%" }}>
          <img src={SI} style={{ width: "100%" }} alt="" />
        </div>
      </div>
      <div className="contact" style={{ marginTop: "2%" }}>
        <div className="heading">
          <h1>CONTACT</h1>
          <h6>Los Angles</h6>
          <h6>Office: 657-234-0101</h6>
          <div className="icons">
            <span>
              <FaInstagram style={{ width: "20px" }} />
            </span>
            <span>
              <RiLinkedinBoxLine style={{ width: "20px" }} />
            </span>
            <span>
              <FaSquareFacebook style={{ width: "20px" }} />
            </span>
          </div>
        </div>
        <div className="form" style={{ marginTop: "2%", marginBottom: "8%" }}>
          <div className="rowForm" style={{ display: "flex", gap: "4%" }}>
            <div className="nameField" style={{ width: "48%" }}>
              <input
                type="text"
                placeholder="Name"
                style={{ width: "100%", padding: "1% 2%" }}
              />
            </div>
            <div className="emailField" style={{ width: "48%" }}>
              <input
                type="text"
                placeholder="Email"
                style={{ width: "100%", padding: "1% 2%" }}
              />
            </div>
          </div>
          <div className="rowForm">
            <input
              type="text"
              placeholder="Subject"
              style={{ width: "100%", padding: ".5% 2%" }}
            />
          </div>
          <div className="rowForm">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Description"
              style={{ width: "100%", padding: ".5% 2%" }}
            ></textarea>
          </div>
          <div className="rowForm">
            <button
              type="button"
              style={{
                width: "100%",
                padding: ".5% 2%",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
