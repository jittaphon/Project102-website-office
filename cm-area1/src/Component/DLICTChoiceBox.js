import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
const { REACT_APP_PATH } = process.env;
export const ChoiceBox = () => {
    const [Data, setData] = useState();
    const [Title, setTitle] = useState();
    const type = "dlict";

    useEffect(() => {
        async function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/FindServiceByType/${type}`).then((res) => {
                setData(res.data);
            });
        }
        get();
    }, []);
    useEffect(() => {
        async function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/ServiceTitleFindByType/${type}`).then((res) => {
                setTitle(res.data);
            });
        }
        get();
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="ChoiceBox" id="ChoiceBoxs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="ChoiceBox-bx wow zoomIn">
                            {Title ? (
                                Title.map((Title, index) => {
                                    return (
                                        <TrackVisibility key={index}>
                                            {({ isVisible }) => (
                                                <div
                                                    className={
                                                        isVisible ? "animate__animated  animate__fadeInDown" : ""
                                                    }
                                                >
                                                    <h2>{Title.title}</h2>
                                                    <p>{Title.subtitle}</p>
                                                </div>
                                            )}
                                        </TrackVisibility>
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

                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme ChoiceBox-slider"
                            >
                                {Data ? (
                                    Data.map((data, index) => {
                                        return (
                                            <TrackVisibility key={index}>
                                                {({ isVisible }) => (
                                                    <div
                                                        className={
                                                            isVisible ? "animate__animated animate__flipInX" : ""
                                                        }
                                                    >
                                                        <div className="item">
                                                            <a href={data.url} target="_blank" rel="noreferrer">
                                                                <img src={data.image} alt="Image" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                )}
                                            </TrackVisibility>
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
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="ict" />
        </section>
    );
};
