import { Container } from "react-bootstrap";
import "animate.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TrackVisibility from "react-on-screen";
import { Spinner } from "react-bootstrap";
import { SelectYear } from "../../DataComponent/SelectYear";
import { GroupData } from "../../DataComponent/GroupData";
import { useParams, useNavigate } from "react-router-dom";
const { REACT_APP_PATH } = process.env;
export const DataOfYear = (className) => {
    const { year } = useParams();
    const navigate = useNavigate();
    const [Year, setYear] = useState([]);
    const [Data, setData] = useState([]);
    const [Group_Data, setGroupData] = useState();
    const [selectedYear, setSelectedYear] = useState(year); // middle value to store selected year of data
    useEffect(() => {
        async function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/FindDataEachYear`).then((res) => {
                setYear(res.data);
            });
        }
        get();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${REACT_APP_PATH}/admin/api/FindDataEachYearById/${selectedYear}`);
            setData(response.data);
            setGroupData(response.data.data);
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
                                                value={Data.name_year}
                                                onChange={handleYearChange}
                                            >
                                                <option>{Data.name_year}</option>
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
                                                    return <GroupData key={index} data={data} />;
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
