import React from "react";
import "./ConfirmSlot.css";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
// const CssTextField = styled(TextField)({

//   "& label.Mui-focused": {
//     color: "none",
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "none",
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "none",
//     },
//     "&:hover fieldset": {
//       borderColor: "none",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "none",
//     },

//   },
// });

function ConfirmSlot() {
  const slotDetails = JSON.parse(localStorage.getItem("booking_details"));
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userState, setUserState] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const date = new Date(slotDetails.date).toLocaleDateString().split("/");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div className="confirmSlotWrapper">
        <div className="backNavigation">
          <Link className="backWard" to="/book-online">
            <span>
              <MdOutlineArrowBackIos style={{ color: "black" }} size={25} />
            </span>
            <span style={{ color: "black", fontSize: "25px" }}>Back</span>
          </Link>
        </div>
        <div className="bookDetailsWrapper">
          <div className="formWrapper">
            <div className="formHeader">
              <h3 style={{ padding: "2% 0%", borderBottom: "1px solid black" }}>
                Client Details
              </h3>
              <h6 style={{ padding: "2% 0%" }}>Tell us a bit about yourself</h6>
            </div>
            <div className="customerForm">
              <div className="formRow">
                <div className="inputField" style={{ width: "50%" }}>
                  <h6>Name</h6>
                  <TextField
                    id="outlined-controlled"
                    sx={{ userSelect: "none", outline: "none", width: "100%" }}
                    // label="Name"
                    value={userName}
                    onChange={(event) => {
                      setUserName(event.target.value);
                    }}
                  />
                </div>
                <div className="inputField" style={{ width: "50%" }}>
                  <h6>PhoneNo</h6>
                  <TextField
                    id="outlined-controlled"
                    sx={{ userSelect: "none", outline: "none", width: "100%" }}
                    // label="PhonNo"
                    value={userPhone}
                    onChange={(event) => {
                      setUserPhone(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="formRow">
                <div className="inputField" style={{ width: "100%" }}>
                  <h6>Email</h6>
                  <TextField
                    id="outlined-controlled"
                    sx={{ userSelect: "none", outline: "none", width: "100%" }}
                    // label="Email"
                    value={userEmail}
                    onChange={(event) => {
                      setUserEmail(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="formRow">
                <div className="inputField" style={{ width: "190%" }}>
                  <h6>Address</h6>
                  <TextField
                    id="outlined-controlled"
                    sx={{ userSelect: "none", outline: "none", width: "100%" }}
                    // label="Address"
                    value={userAddress}
                    onChange={(event) => {
                      setUserAddress(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="formRow">
                <div className="inputField" style={{ width: "50%" }}>
                  <h6>City</h6>
                  <TextField
                    id="outlined-controlled"
                    sx={{ userSelect: "none", outline: "none", width: "100%" }}
                    // label="City"
                    value={userCity}
                    onChange={(event) => {
                      setUserCity(event.target.value);
                    }}
                  />
                </div>
                <div className="inputField" style={{ width: "50%" }}>
                  <h6>State</h6>
                  <TextField
                    id="outlined-controlled"
                    sx={{ userSelect: "none", outline: "none", width: "100%" }}
                    // label="State"
                    value={userState}
                    onChange={(event) => {
                      setUserState(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="formRow">
                <div className="inputField" style={{ width: "100%" }}>
                  <h6>Add your Message</h6>
                  <TextField
                    id="outlined-multiline-flexible"
                    sx={{ userSelect: "none", outline: "none", width: "100%" }}
                    // label="Add your message"
                    multiline
                    maxRows={4}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="currentBookingDetail" style={{ padding: "0% 4%" }}>
            <div className="bookingHeader">
              <h5
                style={{ padding: "6% 0px", borderBottom: "1px solid black" }}
              >
                Booking Details
              </h5>
            </div>
            <div className="detailsOfBooking">
              <h5>
                {slotDetails.serviceName} | {slotDetails.serviceType}
              </h5>
              <h6>
                {months[Number(date[1]) - 1] +
                  " " +
                  date[0] +
                  ", " +
                  date[2] +
                  " at " +
                  slotDetails.slot}
              </h6>
              <h6>{"Assistant : " + slotDetails.person}</h6>
              <Link to="/successPage" className="finalSubmit">
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmSlot;
