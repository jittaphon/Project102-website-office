import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Footer } from "./Component/Footer";
import { NavBar } from "./Component/Navbar";
import { HashRouter as Router } from "react-router-dom";
import AnimatedRoute from "./Component/AnimatedRoute";
function App() {
    return (
        <Router>
            <NavBar />
            <AnimatedRoute />
            <Footer />
        </Router>
    );
}

export default App;
