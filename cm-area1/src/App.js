import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Footer } from "./Component/Footer";
import { NavBar } from "./Component/Navbar";
import { Helmet } from "react-helmet";
import { HashRouter as Router } from "react-router-dom";
import AnimatedRoute from "./Component/AnimatedRoute";
function App() {
    
    return (
        <Router>
            <Helmet>
                <title>DLICT CMAREA1</title>
                <meta name="description" content="DLICT CMAREA1" />
            </Helmet>
            <NavBar />
            <AnimatedRoute />
            <Footer />
        </Router>
    );
}

export default App;
