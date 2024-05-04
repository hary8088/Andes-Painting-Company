import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import Axios from "axios";
import "./BookingTemplate.css";
const LoadingIndicator = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
const EmptySlots = () => {
  return (
    <>
      <div className="noAvailableSlots" style={{ textAlign: "center" }}>
        <h3 style={{ fontWeight: "Bold" }}>Oops!.. No slots Available</h3>
        <h6 style={{ fontWeight: "100px" }}>Please Select Other Date...</h6>
      </div>
    </>
  );
};
function BookingTemplate({ serviceName, serviceType }) {
  const [person, setPerson] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [slots, setSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSlotLoading, setIsSlotLoading] = useState(true);
  const [isSlotAvailable, setIsSlotAvailable] = useState(true);
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

  const handleChange = (event) => {
    setPerson(event.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSlotLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [selectedDate]);

  useEffect(() => {
    setIsSlotLoading(true);
    setIsSlotAvailable(true);
    setSlots(["9AM", "10AM", "11AM", "12PM", "2PM", "3PM", "4PM", "5PM"]);
    // Axios.get("http://localhost:3033/users", {
    //   date: selectedDate.valueOf(),
    // })
    //   .then((response) => {
    //     setIsSlotLoading(true);
    //     setIsSlotAvailable(response.data.slots.length > 0);
    //     setSlots(response.data.slots);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [selectedDate]);

  return (
    <>
      <div className="bookingWrapper">
        <div className="backNavigation">
          <Link className="backWard" to="/book-online">
            <span>
              <MdOutlineArrowBackIos style={{ color: "black" }} size={25} />
            </span>
            <span style={{ color: "black", fontSize: "25px" }}>Back</span>
          </Link>
        </div>
        <div className="serviceHeaderWrapper">
          <h2>
            {serviceName} Painting | {serviceType}
          </h2>
          <p style={{ padding: "2% 0 2% 0", borderBottom: "1px solid" }}>
            Check out our availability and book the date and time that works for
            you
          </p>
          <div className="filterWrapper">
            <p>Staff:</p>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="demo-simple-select-autowidth-label">
                Staff
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={person}
                onChange={handleChange}
                autoWidth
                label="Staff"
                className="custom-select"
              >
                <MenuItem value="Tim Cook">Tim Cook</MenuItem>
                <MenuItem value="Harry">Harry</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="calenderOuterWrapper">
          <div className="calenderHeader">
            <h3>Select Date and Time</h3>
          </div>
          <div className="calenderWrapper">
            {isLoading ? (
              <LoadingIndicator />
            ) : (
              <>
                <div className="calenderDiv">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      className="calender"
                      onChange={(newSelectedDate) => {
                        setSelectedDate(newSelectedDate);
                      }}
                      minDate={dayjs()}
                      value={selectedDate}
                    />
                  </LocalizationProvider>
                </div>
                <div className="dateSelection">
                  {isSlotLoading ? (
                    <LoadingIndicator />
                  ) : (
                    <>
                      {isSlotAvailable ? (
                        <>
                          <div className="calenderContent">
                            <b style={{ fontSize: "25px", fontWeight: "800" }}>
                              What time works best?
                              {isSlotAvailable}
                            </b>
                            <br />
                            Showing times for
                            <b style={{ fontWeight: "bold" }}>
                              {" " +
                                months[selectedDate.month() - 1] +
                                " " +
                                selectedDate.date() +
                                "," +
                                selectedDate.year()}
                            </b>
                          </div>
                          <div className="freeSlots">
                            {slots.map((slot) => (
                              <Link
                                key={slot}
                                to="/confirmSlot"
                                className="slotsList"
                                onClick={(e) => {
                                  const bookingDetails = {
                                    date: selectedDate.valueOf(),
                                    person,
                                    slot,
                                    serviceName,
                                    serviceType,
                                  };
                                  localStorage.setItem(
                                    "booking_details",
                                    JSON.stringify(bookingDetails)
                                  );
                                }}
                              >
                                {slot}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <EmptySlots />
                      )}
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(BookingTemplate);
