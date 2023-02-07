import { Container } from "react-bootstrap";
import "animate.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import { NewsCard } from "../Component/NewsCard";
import TrackVisibility from "react-on-screen";
import { Spinner } from "react-bootstrap";
const { REACT_APP_PATH } = process.env;
export const ArticlePage = (className) => {
    const [loading, setLoading] = useState(true);
    const [Data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        async function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/FindNews`).then((res) => {
                setData(res.data.reverse());
                setLoading(false);
            });
        }
        get();
    }, []);

    if (loading) {
        return (
            <section className="banner-ArticlePage" id="home">
                <Container>
                    <section className="ChoiceBox" id="ChoiceBoxs">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="ChoiceBox-bx wow zoomIn">
                                        <TrackVisibility>
                                            {({ isVisible }) => (
                                                <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                                                    <h1 className="headNew">สื่อประชาสัมพันธ์</h1>
                                                </div>
                                            )}
                                        </TrackVisibility>
                                        <Spinner
                                            animation="border"
                                            role="status"
                                            style={{ width: "3rem", height: "3rem", margin: "20px" }}
                                        >
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </section>
        );
    }

    return (
        <section className="banner-ArticlePage" id="home">
            <Container>
                <section className="ChoiceBox" id="ChoiceBoxs">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="ChoiceBox-bx wow zoomIn">
                                    <TrackVisibility>
                                        {({ isVisible }) => (
                                            <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                                                <h1 className="headNew">สื่อประชาสัมพันธ์</h1>
                                            </div>
                                        )}
                                    </TrackVisibility>
                                    {Data ? (
                                        <Row>
                                            {Data.map((data, index) => {
                                                return <NewsCard key={index} data={data} />;
                                            })}
                                        </Row>
                                    ) : (
                                        <Spinner
                                            animation="border"
                                            role="status"
                                            style={{ width: "3rem", height: "3rem", margin: "20px" }}
                                        >
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </section>
    );
};
