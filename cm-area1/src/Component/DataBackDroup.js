import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import { BoxYear } from "../DataComponent/BoxYear";
import "react-awesome-button/dist/styles.css";
import { Spinner } from "react-bootstrap";
const { REACT_APP_PATH2 } = process.env;
export const BackDroup = () => {
    const [loading, setLoading] = useState(true);
    const [Data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        async function get() {
            axios.get(`${REACT_APP_PATH2}/admin/api/FindDataEachYear`).then((res) => {
                const dataArray = []; // create an empty array to store the parsed data
                for (const item of res.data) {
                    const parsedData = {
                        id: item.id, // add the id property to the parsed data object
                        year: JSON.parse(item.Year), // parse the Year property for each item
                    };
                    dataArray.push(parsedData); // store the parsed data in the array
                }
                setData(dataArray);
                setLoading(false);
            });
        }
        get();
    }, []);
   

    if (loading) {
        return (
            <section className="ChoiceBox" id="ChoiceBoxs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="ChoiceBox-bx wow zoomIn">
                                <TrackVisibility>
                                    {({ isVisible }) => (
                                        <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                                            <h2>Big Data</h2>
                                        </div>
                                    )}
                                </TrackVisibility>
                                <div
                                    className="row"
                                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                                >
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
                <img className="background-image-left" src={colorSharp} alt="ict" />
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
                                    <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                                        <h2>Big Data</h2>
                                    </div>
                                )}
                            </TrackVisibility>
                            <div className="row">
                                {Data &&
                                    Data.map((data, index) => {
                                        return <BoxYear key={index} data={data} />;
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="ict" />
        </section>
    );
};
