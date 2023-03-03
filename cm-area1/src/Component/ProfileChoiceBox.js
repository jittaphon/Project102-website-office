import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import Card from "react-bootstrap/Card";
const { REACT_APP_PATH2 } = process.env;
export const ChoiceBox = ({ className, index }) => {
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        function get() {
            axios.get(`${REACT_APP_PATH2}/admin/api/DataPerson`).then((res) => {
                setData(res.data);
                setLoading(false);
            });
        }
        get();
    }, []);


    const leader = Data.filter((element) => element.Positions === "leader");
    const group_leader = Data.filter((element) => element.Positions === "group_leader");
    const general = Data.filter((element) => element.Positions === "general");

    console.log(Data)

    if (loading) {
        return (
            <section className="ChoiceBox" id="ChoiceBoxs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="ChoiceBox-bx wow zoomIn">
                                <TrackVisibility>
                                    {({ isVisible }) => (
                                        <div className={isVisible ? "animate__animated  animate__fadeInDown" : ""}>
                                            <h1>บุคลากร</h1>
                                        </div>
                                    )}
                                </TrackVisibility>
                                <div className="row justify-content-center ">
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
                </div>
                <img className="background-image-left" src={colorSharp} alt="BackGround" />
            </section>
        );
    }

    return (
        <section className="ChoiceBox" id="ChoiceBoxs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="ChoiceBox-bx wow zoomIn">
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated  animate__fadeInDown" : ""}>
                                        <h1>บุคลากร</h1>
                                    </div>
                                )}
                            </TrackVisibility>
                            <div className="row justify-content-center ">
                                {leader ? (
                                    leader.map((leader, index) => {
                                        return (
                                            <Card
                                                key={index}
                                                style={{ width: "12rem", margin: "10px", padding: "0px" }}
                                                className="zoom"
                                            >
                                                {leader.Operating_Manual ? (
                                                    <a href={leader.Operating_Manual} target="_blank" rel="noreferrer">
                                                        <Card.Img variant="top" src={leader.Profile} />
                                                    </a>
                                                ) : (
                                                    <Card.Img variant="top" src={leader.Profile} />
                                                )}
                                            </Card>
                                        );
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
                            </div>
                            {group_leader ? (
                                group_leader.map((group_leader, index) => {
                                    return (
                                        <div className="row justify-content-center">
                                            <Card
                                                key={index}
                                                style={{ width: "12rem", margin: "10px", padding: "0px" }}
                                                className="zoom"
                                            >
                                                {group_leader.Operating_Manual ? (
                                                    <a
                                                        href={group_leader.Operating_Manual}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <Card.Img variant="top" src={group_leader.Profile} />
                                                    </a>
                                                ) : (
                                                    <Card.Img variant="top" src={group_leader.Profile} />
                                                )}
                                            </Card>
                                        </div>
                                    );
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
                            {general ? (
                                general.map((general, index) => {
                                    return (
                                        <div className="row justify-content-center">
                                            <Card
                                                key={index}
                                                style={{ width: "12rem", margin: "10px", padding: "0px" }}
                                                className="zoom"
                                            >
                                                {general.Operating_Manual ? (
                                                    <a href={general.Operating_Manual} target="_blank" rel="noreferrer">
                                                        <Card.Img variant="top" src={general.Profile} />
                                                    </a>
                                                ) : (
                                                    <Card.Img variant="top" src={general.Profile} />
                                                )}
                                            </Card>
                                        </div>
                                    );
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
                            {Data ? (
                                <></>
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
            <img className="background-image-left" src={colorSharp} alt="BackGround" />
        </section>
    );
};
