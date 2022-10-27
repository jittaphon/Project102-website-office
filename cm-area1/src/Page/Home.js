import React from "react";
import { HomeBanner } from "../Component/HomeComponent";
import { News } from "../Component/New";
import { Skills } from "../Component/Skill";
import { Contact } from "../Component/Contract";
import { motion } from "framer-motion";
const Home = () => {
    return (
        <motion.div className="" >
            <HomeBanner />
            <Skills />
            <News />
            <Contact />
        </motion.div>
    );
};

export default Home;
