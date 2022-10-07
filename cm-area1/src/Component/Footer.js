import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "react-scroll-to-top";

export const Footer = (className) => {
    return (
        <footer className="footer">
            <ScrollToTop smooth />
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <p>
                            สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต 1 อาคารอำนวยการกลาง ชั้น 4
                            ศาลากลางจังหวัดเชียงใหม่ อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่ 50300
                        </p>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <p>DLICT CMA1 ©Copyright 2022 All rights reserved.</p>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-start">
                        <p>
                          <a href="https://www.facebook.com/profile.php?id=100057185991041" target="_blank" rel="noreferrer">
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
                </Row>
            </Container>
        </footer>
    );
};
