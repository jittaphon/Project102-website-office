import React from "react";
import { HomeBanner } from "../Component/HomeComponent";
import { News } from "../Component/New";
import { Skills } from "../Component/Skill";
import { Contact } from "../Component/Contract";
import { motion } from "framer-motion";
import { VIDEO } from "../Component/Video";
const Home = () => {
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
