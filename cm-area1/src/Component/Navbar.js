import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/youtube.svg";
import navIcon1 from "../assets/img/user.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand className="brand">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/*"
                            className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/profile"
                            className={activeLink === "ทําเนียบบุคลากร" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("ทําเนียบบุคลากร")}
                        >
                            ทําเนียบบุคลากร
                        </Nav.Link>


                        <Nav.Link
                            as={Link}
                            to="/big-data/year/year"
                            className={activeLink === "information" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("big-data")}
                        >
                            Big Data
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/information/data"
                            className={activeLink === "information" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("information")}
                        >
                            ข้อมูลหน่วยงานในสังกัด
                        </Nav.Link>
                        
                        

                        <Nav.Link
                            as={Link}
                            to="/DLICT"
                            className={activeLink === "DLICT" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("DLICT")}
                        >
                            DLICT
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/Contact-us"
                            className={activeLink === "CONTRACT US" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("CONTRACT US")}
                        >
                            CONTRACT US
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/FAQ"
                            className={activeLink === "FAQ" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("FAQ")}
                        >
                            FAQ
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a
                                href="https://www.facebook.com/profile.php?id=100057185991041"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={navIcon2} alt="" />
                            </a>
                            <a href="https://www.instagram.com/cmarea_1/" target="_blank" rel="noreferrer">
                                <img src={navIcon3} alt="" />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCtjlRN5V2b4tDvRCdzacp_w"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={navIcon4} alt="" />
                            </a>
                            <a href="https://chiangmaiarea1-server.web.app/" target="_blank" rel="noreferrer">
                                <img src={navIcon1} alt="" />
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
