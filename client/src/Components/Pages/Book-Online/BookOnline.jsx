import React from "react";
import "./BookOnline.css";
import { Link } from "react-router-dom";
function BookOnline() {
  const services = [
    {
      serviceName: "Commercial Painting | Exterior",
      link: "/bookCommercialExterior",
    },
    {
      serviceName: "Commercial | Interior",
      link: "/bookCommercialInterior",
    },
    {
      serviceName: "Residential | Exterior",
      link: "/bookResidentialExterior",
    },
    {
      serviceName: "Residential | Interior",
      link: "/bookResidentialInterior",
    },
  ];
  return (
    <>
      <div className="bookingWrapper">
        <ol className="bookingInnerWrapper">
          {services.map((service) => (
            <li key={service.serviceName}>
              <p>{service.serviceName}</p>
              <Link className="linkTo" to={service.link}>
                <p>Book Now</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default BookOnline;
