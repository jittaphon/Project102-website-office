import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Page/Home";
import Data from "./Page/Data";
import Profile from "./Page/Profile";
import DLICT from "./Page/DLICT";
import FAQ from "./Page/FAQ";
import Contact from "./Page/Contact";
import DService from "./Page/DataService"
import { Footer } from "./Component/Footer";
import { NavBar } from "./Component/Navbar";
import { Helmet } from "react-helmet";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <Router>
            
            <Helmet>
                <title>DLICT CMAREA1</title>
                <meta name="description" content="DLICT CMAREA1" />
            </Helmet>
            <NavBar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/information/data" element={<Data />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/DLICT" element={<DLICT />} />
                <Route path="/Contractus" element={<Contact />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/information/data-service" element={<DService />} />
            </Routes>
            <Footer />
        </Router>
        
    );
}

export default App;
