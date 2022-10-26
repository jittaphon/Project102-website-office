import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { NewsCard } from "./NewsCard";
import React from "react";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import {AboutBackDrop} from "./About";


export const News = (className) => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

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
                                                <Row>
                                                    {projects.map((project, index) => {
                                                        return <NewsCard key={index} {...project} />;
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                                    quam, quod neque provident velit, rem explicabo excepturi id illo
                                                    molestiae blanditiis, eligendi dicta officiis asperiores delectus
                                                    quasi inventore debitis quo.
                                                </p>
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
