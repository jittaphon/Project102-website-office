import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import GoogleMap from "./GoogleMap";

export const ContractPage = (className) => {
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                      
                          <GoogleMap/>
                   
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
