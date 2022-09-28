import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React, { useRef } from "react";
import headerImg from "../assets/img/person2.jpg";
export const ProfileDetail = () => {
    return (
        <section className="profiledetail" id="connect">
            <Container>
                <Row className="align-items-center">
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} alt="Header Img"  />
                            </div>
                        )}
                    </TrackVisibility>
                    <Col size={12} md={6}></Col>
                </Row>
            </Container>
        </section>
    );
};
