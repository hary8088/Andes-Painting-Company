import React from "react";
import Home from "./Components/Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./Components/PageLayout/PageLayout";
import About from "./Components/Pages/About/About";
import Commercial from "./Components/Pages/Commercial/Commercial";
import Residential from "./Components/Pages/Residential/Residential";
import PublicWork from "./Components/Pages/Public-Work/PublicWork";
import MultiFamily from "./Components/Pages/Multi-Family/MultiFamily";
import BookOnline from "./Components/Pages/Book-Online/BookOnline";
const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/public-work" element={<PublicWork />} />
          <Route path="/multi-family" element={<MultiFamily />} />
          <Route path="/book-online" element={<BookOnline />} />
        </Route>
      </Routes>
    </>
  );
};
export default router;
