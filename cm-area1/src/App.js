import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Page/Home";
import Data from "./Page/Data";
import Profile from "./Page/Profile";
import { NavBar } from "./Component/Navbar";
import {Helmet} from "react-helmet";
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
                <Route path="/information" element={<Data />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
