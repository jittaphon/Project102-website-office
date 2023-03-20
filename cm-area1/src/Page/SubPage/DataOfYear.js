import { Container } from "react-bootstrap";
import "animate.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TrackVisibility from "react-on-screen";
import { Spinner } from "react-bootstrap";
import { SelectYear } from "../../DataComponent/SelectYear";
import { GroupData } from "../../DataComponent/GroupData";
import { useParams, useNavigate } from "react-router-dom";
const { REACT_APP_PATH2 } = process.env;
export const DataOfYear = (className) => {
    const { year } = useParams();
    const navigate = useNavigate();
    const [Year, setYear] = useState([]);
    const [Group_Data, setGroupData] = useState();
    const [selectedYear, setSelectedYear] = useState(year);
   // middle value to store selected year of data

    useEffect(() => {
        function get() {
            axios.get(`${REACT_APP_PATH2}/admin/api/FindDataEachYearById/${year}`).then((res) => {
                const { id, Year } = res.data[0]; // Accessing the first item in the response array
                const parsedData = {
                    id: id, // add the id property to the parsed data object
                    year: JSON.parse(Year), // parse the Year property for each item
                };
                setGroupData(parsedData.year.group);
            });
        }
        get();
    }, [year]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${REACT_APP_PATH2}/admin/api/FindDataEachYear`);
                const parsedData = response.data.map((item) => {
                    const { id, Year } = item;
                    return {
                        id: id,
                        year: JSON.parse(Year),
                    };
                });
                setYear(parsedData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${REACT_APP_PATH2}/admin/api/FindDataEachYearById/${selectedYear}`);
            const { id, Year } = response.data[0]; // Accessing the first item in the response array
            const parsedData = {
                id: id, // add the id property to the parsed data object
                year: JSON.parse(Year), // parse the Year property for each item
            };
            setGroupData(parsedData.year.group);
            navigate(`/information/data/${selectedYear}`);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [selectedYear]);

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

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
                                                <h1 className="headNew">หน่วยงานในสังกัด</h1>
                                            </div>
                                        )}
                                    </TrackVisibility>
                                    <div className="row justify-content-end ">
                                        <div className="col-3">
                                            <select
                                                className="form-select "
                                                value={selectedYear}
                                                onChange={handleYearChange}
                                            >
                                                {Year ? (
                                                    Year.map((Year, index) => {
                                                        return <SelectYear key={index} data={Year} />;
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
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="d-flex flex-wrap">
                                            {Group_Data ? (
                                                Group_Data.map((data, index) => {
                                                    return <GroupData key={index} data={data} id_group={index} />;
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </section>
    );
};
