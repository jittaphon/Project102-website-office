import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { NewsCard } from "./NewsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { AboutBackDrop } from "./About";
import { OPMBackDrop } from "./OPMBackDrop";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
const { REACT_APP_PATH ,REACT_APP_PATHNEW} = process.env;

export const News = (className) => {
    const [loading, setLoading] = useState(true);
    const [Data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        async function get() {
            axios.get(`${REACT_APP_PATHNEW}/admin/api/FindNews`).then((res) => {
                setData(res.data.reverse());
                setLoading(false);
            });
        }
        get();
    }, []);

    if (loading) {
        return (
            <section className="project" id="project">
                <Container>
                    <Row>
                        <Col size={12}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <h2>Informations</h2>
                                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                            <Nav
                                                variant="pills"
                                                className="nav-pills mb-5 justify-content-center align-items-center"
                                                id="pills-tab"
                                            >
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">ข่าวกิจกรรม</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">คู่มือปฏิบัติงาน</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">เกี่ยวกับ DLICT</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content
                                                id="slideInUp"
                                                className={isVisible ? "animate__animated animate__slideInUp" : ""}
                                            >
                                                <Tab.Pane eventKey="first">
                                                    <Link
                                                        to={`/article`}
                                                        style={{ textDecoration: "none", color: "white" }}
                                                    >
                                                        <div className="view-all"> View All</div>
                                                    </Link>

                                                    <Row>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                            }}
                                                        >
                                                            <Spinner animation="border" variant="primary" />
                                                        </div>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <div>
                                                        <OPMBackDrop />
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                    <div>
                                                        <AboutBackDrop />
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2} alt="ict"></img>
            </section>
        );
    }

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Informations</h2>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">ข่าวกิจกรรม</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">คู่มือปฏิบัติงาน</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">เกี่ยวกับ DLICT</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={isVisible ? "animate__animated animate__slideInUp" : ""}
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Link
                                                    to={`/article`}
                                                    style={{ textDecoration: "none", color: "white" }}
                                                >
                                                    <div className="view-all"> View All</div>
                                                </Link>

                                                <Row>
                                                    {Data.slice(0, 6).map((data, index) => {
                                                        return <NewsCard key={index} data={data} />;
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div>
                                                    <OPMBackDrop />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <div>
                                                    <AboutBackDrop />
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="ict"></img>
        </section>
    );
};
