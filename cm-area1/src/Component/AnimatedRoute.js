import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Page/Home";
import Data from "../Page/Data";
import { DataOfYear } from "../Page/SubPage/DataOfYear";
import { DataOfGroupOfData } from "../Page/SubPage/DataOfGroupOfData";
import Profile from "../Page/Profile";
import DLICT from "../Page/DLICT";
import FAQ from "../Page/FAQ";
import Contact from "../Page/Contact";
import NewsDetail from "../Page/NewsDetail";
import { ArticlePage } from "../Page/ArticleAll";
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/*" element={<Home />} />
                <Route path="/information/data" element={<Data />} />
                <Route path="/information/data/:year" element={<DataOfYear />} />
                <Route path="/information/data/:year/:group/" element={<DataOfGroupOfData />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/DLICT" element={<DLICT />} />
                <Route path="/Contact-us" element={<Contact />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/article" element={<ArticlePage />} />
                <Route path="/article/:id" element={<NewsDetail />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;
