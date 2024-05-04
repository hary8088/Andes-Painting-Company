import React from "react";
// import { MotionValue, useMotionValue } from "framer-motion";
// import CircularProgress from "./CircularProgress";
import "./SuccessPage.css";
import { SiTicktick } from "react-icons/si";
function SuccessPage() {
  // const progress = useMotionValue(90);
  return (
    <>
      <div
        className="successWrapper"
        style={{
          height: "25svh",
          margin: "6% 20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="tickImage">
          <SiTicktick style={{ width: "100px", height: "100px" }} />
        </div>
        <div className="successMessage">
          <h1>Your Appointment has been confirmed!...</h1>
        </div>
      </div>
    </>
  );
}

export default SuccessPage;
