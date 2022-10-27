import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Page/Home";
import Data from "../Page/Data";
import Profile from "../Page/Profile";
import DLICT from "../Page/DLICT";
import FAQ from "../Page/FAQ";
import Contact from "../Page/Contact";
import DService from "../Page/DataService";
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/home" element={<Home />} />
                <Route path="/information/data" element={<Data />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/DLICT" element={<DLICT />} />
                <Route path="/Contractus" element={<Contact />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/information/data-service" element={<DService />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;
