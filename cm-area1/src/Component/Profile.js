import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React from "react";
export const ProfileDetail = (className) => {
    return (
        <section className="profiledetail" id="connect">
            <Container>
                <Row className="align-items-center">
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            
                            </div>
                        )}
                    </TrackVisibility>
                    <Col size={12} md={6}></Col>
                </Row>
            </Container>
        </section>
    );
};
