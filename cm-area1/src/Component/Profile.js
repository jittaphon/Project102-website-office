import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import React from "react";

function ProfileDetail({ className, data }) {
    return (
        <div>
            <section className="profiledetail" id="connect">
                <Container>
                    <Row className="align-items-center">
                         {data.name}
                        <Col size={12} md={6}></Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}


export default ProfileDetail