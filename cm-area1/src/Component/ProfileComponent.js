import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ProfilePage = () => {


    return (
        <section className="banner" id="home">
            <Container>
                <Col xs={12} md={6} xl={9}>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="taglineProfile">ทำเนียบบุคคลากร</span>
                            </div>
                        )}
                    </TrackVisibility>
                </Col>
            </Container>
        </section>
    );
};
