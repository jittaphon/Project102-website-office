import React from "react";
import { HomeBanner } from "../Component/HomeComponent";
import { News } from "../Component/New";
import { Skills } from "../Component/Skill";
import { Footer } from "../Component/Footer";
import { Contact } from "../Component/Contract";
const Home = () => {
    return (
        <div className="">
            <HomeBanner />
            <Skills />
            <News />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
