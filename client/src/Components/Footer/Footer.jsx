import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <>
      <div className="footerWrapper">
        <div className="content">
          <div className="innerWrapper">
            <h2>Andes Painting Company</h2>
          </div>
          <div className="innerWrapper">
            <span className="topic">Address</span>
            <p>Los Angles, CA</p>
          </div>
          <div className="innerWrapper">
            <span className="topic">Contact</span>
            <p>----@andespainting.com</p>
            <p>Contact: 703-283-7446</p>
          </div>
          <div className="innerWrapper">
            <span className="topic">Follow</span>
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
        </div>
        <div className="copyright">
          {/* <span>
            <CopyrightIcon style={{ width: "20px", color: "whitesmoke" }} />
          </span> */}
          ©&nbsp;2024,&nbsp;Andes Painting Company Pvt. Ltd. All Rights
          Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
