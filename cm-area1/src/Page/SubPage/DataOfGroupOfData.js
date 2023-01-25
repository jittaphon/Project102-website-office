import { Container } from "react-bootstrap";
import "animate.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TrackVisibility from "react-on-screen";
import Accordion from "react-bootstrap/Accordion";
import { AccordionNameData1 } from "../../DataComponent/AccordionNameData1";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const { REACT_APP_PATH } = process.env;

export const DataOfGroupOfData = (className) => {
    const { year } = useParams();
    const { group } = useParams();
    const [Data, setData] = useState();

    const fetchDataYear = async () => {
        try {
            const response = await axios.get(`http://localhost:7000/admin/api/FindDataInGroupOfData/${year}/${group}`);
            setData(response.data[0].date);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchDataYear();
    }, []);

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
                                            <div className={isVisible ? "animate__animated  animate__fadeInDown" : ""}>
                                                <h1 className="headNew">Data</h1>
                                            </div>
                                        )}
                                    </TrackVisibility>
                                    <Accordion>
                                        {Data ? (
                                            Data.map((data, index) => {
                                                return <AccordionNameData1 data={data} key={uuidv4()} />;
                                            })
                                        ) : (
                                            <Spinner
                                                animation="border"
                                                role="status"
                                                style={{ width: "3rem", height: "3rem", margin: "20px" }}
                                            >
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>
                                        )}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </section>
    );
};
