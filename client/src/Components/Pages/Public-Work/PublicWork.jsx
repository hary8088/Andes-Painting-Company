import React from "react";
import "./PublicWork.css";
import Section1Image from "../../../assets/Publiwork/Section1Image.webp";
function PublicWork() {
  return (
    <>
      <div className="publicworkSection1">
        <div className="section1-content">
          <h1>PUBLIC WORK</h1>
          <span>Interior | Exterior</span>
          <div>
            <span>
              Our residential client makes up the foundation of our company. We
              strive to provide the highest quality of service, paying attention
              to every need, detail, and expectation of our homeowners.
            </span>
            <ul>
              <li>Health and Safety </li>
              <li>Scheduling | Management</li>
              <li>Quality Control </li>
              <li>Waste Management Painting Plans</li>
              <li>Environmental Protection Painting Plans</li>
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
    </>
  );
}

export default PublicWork;
