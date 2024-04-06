import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/brandLogo.jpeg";
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
            src={logo}
            alt="Logo"
            style={{ width: "100%", height: "100%", borderRadius: "100%" }}
          />
        </div>
        <div className="pageInfo">
          <div className="companyName">
            <h1>Andes Painting Company</h1>
          </div>
          <div className="companySlogan">
            <p>Crafting Elegance, One Brushstroke at a Time</p>
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
