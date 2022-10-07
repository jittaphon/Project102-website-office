import { Container, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ProfilePage = (className) => {


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
