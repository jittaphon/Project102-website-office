import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Statistic } from "antd";
import { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import axios from "axios";
import { Card } from "antd";
const { REACT_APP_GA } = process.env;

export const Footer = (className) => {
    const [Online, setOnline] = useState("");
    const [All, setAll] = useState("");
    const [Event, setEvent] = useState("");
    useEffect(() => {
        async function get() {
            axios.get(`${REACT_APP_GA}/UserOnline`).then((res) => {
                const numberRegex = /\d+/; // regular expression to match any number
                const numberString = res.data.match(numberRegex)[0]; // extract the first number found in the string
                const numberOfUsers = parseInt(numberString); // convert the extracted string to an integer
                setOnline(numberOfUsers);
            });
            axios.get(`${REACT_APP_GA}/AllUserVisit`).then((res) => {
                const numberRegex = /\d+/; // regular expression to match any number
                const numberString = res.data.match(numberRegex)[0]; // extract the first number found in the string
                const numberOfUsers = parseInt(numberString); // convert the extracted string to an integer
                setAll(numberOfUsers);
            });
            axios.get(`${REACT_APP_GA}/AllEvent`).then((res) => {
                const numberRegex = /\d+/; // regular expression to match any number
                const numberString = res.data.match(numberRegex)[0]; // extract the first number found in the string
                const numberOfUsers = parseInt(numberString); // convert the extracted string to an integer
                setEvent(numberOfUsers);
            });
        }
        get();
    }, []);

    return (
        <footer className="footer">
            <ScrollToTop smooth />
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <p>
                            สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต 1 อาคารอำนวยการกลาง ชั้น 4
                            ศาลากลางจังหวัดเชียงใหม่ อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่ 50300
                        </p>
                        <p>
                            <a
                                href="https://www.facebook.com/profile.php?id=100057185991041"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faFacebook} style={{ paddingRight: "10px" }} />
                                Facebook
                            </a>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} style={{ paddingRight: "10px" }} />
                            ติดต่อเราได้ที่ : 053-112333
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} style={{ paddingRight: "10px" }} />
                            โทรสาร : 053-112677 ต่อ 319 : กลุ่มส่งเสริมการศึกษาทางไกล เทคโนโลยีสารสนเทศและการสื่อสาร
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} style={{ paddingRight: "10px" }} />
                            ict@chiangmaiarea1.go.th
                        </p>
                    </Col>

                    <Col xs={6} md={4} className="text-center text-sm-end">
                        <p>DLICT CMA1 ©Copyright 2022 All rights reserved.</p>
                        <Card title="Static website" bordered={false}>
                            <Row className="text-center justify-content-end">
                                <Col md="auto">
                                    <Statistic title="Active Users" value={Online} valueStyle={{ color: "#3f8600" }} />
                                </Col>
                                <Col md="auto">
                                    <Statistic
                                        title="Users Visiting All"
                                        value={All}
                                        valueStyle={{ color: "#876800" }}
                                    />
                                </Col>
                                <Col md="auto">
                                    <Statistic
                                        title="All Event Occurs "
                                        value={Event}
                                        valueStyle={{ color: "#876800" }}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
