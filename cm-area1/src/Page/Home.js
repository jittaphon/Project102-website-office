import React, { useEffect } from "react";
import { HomeBanner } from "../Component/HomeComponent";
import { News } from "../Component/New";
import { Skills } from "../Component/Skill";
import { Contact } from "../Component/Contract";
import { motion } from "framer-motion";
import { VIDEO } from "../Component/Video";
import ReactGA from "react-ga";

const Home = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    });
    
    ReactGA.event({
        category: "User",
        action: "Visit",
    });

    return (
        <motion.div className="">
            <HomeBanner />
            <Skills />
            <News />
            <Contact />
            <VIDEO />
        </motion.div>
    );
};

export default Home;
