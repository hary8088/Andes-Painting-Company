import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
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
    {
      name: "Book-Online",
      link: "/book-online",
    },
  ];

  return (
    <>
      <header className="outerContainer">
        <div className="logo">
          <img
            src="https://static.wixstatic.com/media/cb2f73_7fa3963592cb438fb089a62b6905b7b3~mv2.png/v1/fill/w_134,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/earvin%20logo%20png-2.png"
            alt="Logo"
            style={{ width: "100%" }}
          />
        </div>
        <div className="pageInfo">
          <div className="companyName">
            <h1>R&L QUALITY PAINTING</h1>
          </div>
          <div className="companySlogan">
            <p>The First Choice in Professional Painting</p>
          </div>
        </div>
        <div className="pagesRoutes">
          {navItems.map((item) => (
            <Link key={item.name} to={item.link}>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};
export default Header;
