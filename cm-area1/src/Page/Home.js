import React from 'react';
import { HomeBanner } from "../Component/HomeComponent";
import { News } from "../Component/New";
import {Skills} from "../Component/Skill";
import { Footer } from "../Component/Footer";
const Home = () => {

    return (
        <div className="">
        <HomeBanner />
        <Skills/>
        <News/>
        <Footer/>
        </div>

    );
}

export default Home;
