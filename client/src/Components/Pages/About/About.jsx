import React from "react";
import "./About.css";
import RUBEN from "../../../assets/About/RUBEN.jpg";
import EARVIN from "../../../assets/About/EARVIN.jpeg";
import GABE from "../../../assets/About/GABE.webp";
import { Link } from "react-router-dom";
function About() {
  const members = [
    {
      name: "Rumualdo",
      position: "Owner/Founder",
      experience:
        "25 Years of Painting Experience Graduate of the University of Guadalajara Contact",
      contact: "mailto:ruben@rlqualitypainting.com",
      image: RUBEN,
    },
    // {
    //   name: "EARVIN GODINEZ",
    //   position: "Director of Operations",
    //   experience:
    //     "10 Years of Painting Experience Graduate of University of Southern California, Marshall School of Business",
    //   contact: "mailto:earvin@rlqualitypainting.com",
    //   image: EARVIN,
    // },
    // {
    //   name: "GABE BECERRA, MPM",
    //   position: "Project Manager",
    //   experience:
    //     "10 Years of Project Management Experience Graduate of Chapman University Master Project Management",
    //   contact: "mailto:gabe@rlqualitypainting.com",
    //   image: GABE,
    // },
  ];
  return (
    <>
      <div className="about-section1">
        <h1>WHO WE ARE</h1>
        <p>Quality & Integrity</p>
        <p style={{ textAlign: "justify" }}>
          Since our founding, Andes Painting Painting has been committed to
          providing exceptional service to our clients and community. Our
          passion for painting is evident in our work. Andes's unparalleled
          determination for our customer's satisfaction, our integrity, and
          pursuit of high quality, has helped us become one of the most trusted
          contractors in the industry.
        </p>
      </div>
      <div className="about-section2">
        <h1 style={{ paddingBottom: "2%" }}>OUR FOUNDER</h1>
        <div className="members">
          {members.map((member) => (
            <div
              key={member.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: "80%",
                height: "100%",
                gap: "2rem",
              }}
            >
              <div style={{ height: "55%" }}>
                <img
                  src={member.image}
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  alt={member.name}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  height: "70%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: "20px",
                }}
              >
                <h3 style={{ fontWeight: "700" }}>{member.name}</h3>
                <span>{member.position}</span>
                <p style={{ width: "100%" }}>{member.experience}</p>
                <Link
                  to={member.contact}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p style={{ fontSize: "20px", fontWeight: "400" }}>
                    Contact Me
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
