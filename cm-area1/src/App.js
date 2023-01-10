import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./Component/Footer";
import { NavBar } from "./Component/Navbar";
import { HashRouter as Router } from "react-router-dom";
import AnimatedRoute from "./Component/AnimatedRoute";
function App() {
    const [title] = useState("กลุ่มส่งเสริมการศึกษาทางไกล เทคโนโลยีสารสนเทศและการสื่อสาร สพป.เชียงใหม่ เขต 1");

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Router>
            <NavBar />
            <AnimatedRoute />
            <Footer />
        </Router>
    );
}

export default App;
