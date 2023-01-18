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
const { REACT_APP_PATH } = process.env;
export const News = (className) => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        async function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/FindNews`).then((res) => {
                setData(res.data.reverse());
            });
        }
        get();
    }, []);

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
                                                    <div class="view-all"> View All</div>
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
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    );
};
