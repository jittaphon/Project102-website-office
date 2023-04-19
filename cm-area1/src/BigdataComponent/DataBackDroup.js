import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import "react-awesome-button/dist/styles.css";
import { Spinner } from "react-bootstrap";
import { SelectYear } from "./SelectYear";
import { useParams, useNavigate } from "react-router-dom";
import Img4 from "../../src/assets/img/sorry.png";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";

const { REACT_APP_PATH2 } = process.env;
export const BackDroup = () => {
    const [size, setSize] = useState("large");

    const year = useParams();
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [Year, setYear] = useState([]);
    const [Group_Data, setGroupData] = useState();
    const [selectedYear, setSelectedYear] = useState(year.year);
    const [isLoading, setIsLoading] = useState(false);

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    useEffect(() => {
        setLoading(true);
        async function get() {
            axios.get(`${REACT_APP_PATH2}/admin/api/findYear`).then((res) => {
                const dataArray = []; // create an empty array to store the parsed data
                for (const item of res.data) {
                    const parsedData = {
                        id: item.id, // add the id property to the parsed data object
                        year: JSON.parse(item.year), // parse the Year property for each item
                    };
                    dataArray.push(parsedData);
                    const uniqueYears = [...new Set(dataArray.map((item) => item.year.name_year))];
                    setYear(uniqueYears);
                }

                setLoading(false);
            });
        }
        get();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${REACT_APP_PATH2}/admin/api/findEachYear/${selectedYear}`);
            const { id, year } = response.data[0]; // Accessing the first item in the response array
            const parsedData = {
                id: id, // add the id property to the parsed data object
                year: JSON.parse(year), // parse the Year property for each item
            };
            setData(parsedData);
            navigate(`/big-data/year/${selectedYear}`);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [selectedYear]);

    const [selectedItem, setSelectedItem] = useState("");
    const [selectedItemName, setSelectedItemName] = useState("");
    const [clickedItem, setClickedItem] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleClick = (item, name) => {
        setSelectedItemName(name);
        setClickedItem(item);
        setIsLoading(true);
        setSelectedItem(item);
        setIsLoading(false);
    };

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
                                <div className="row justify-content-end ">
                                    <div className="col-3 p-2">
                                        <select
                                            className="form-select "
                                            value={selectedYear} // 2565
                                            onChange={handleYearChange}
                                        >
                                            <option value="">----กรุณาเลือกปีการศึกษา----</option>
                                            {Year ? (
                                                Year.map((Year, index) => {
                                                    return <SelectYear key={index} data={Year} />;
                                                }).reverse()
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
                                    <div className="row">
                                        <div
                                            className="col-md-3"
                                            style={{ backgroundColor: "white", padding: 0, margin: 0 }}
                                        >
                                            <Accordion defaultActiveKey="0">
                                                {Data && Data.year && Data.year.group ? (
                                                    Data.year.group.map((group, index) => {
                                                        return (
                                                            <Accordion.Item eventKey={index} key={index}>
                                                                <Accordion.Header>{group.Name}</Accordion.Header>
                                                                <Accordion.Body>
                                                                    {group.Data ? (
                                                                        <ListGroup
                                                                            style={{ backgroundColor: "#f8f9fa" }}
                                                                        >
                                                                            {group.Data.map((item, index) => {
                                                                                return (
                                                                                    <ListGroup.Item
                                                                                        key={index}
                                                                                        className="d-flex justify-content-between align-items-center"
                                                                                        style={{
                                                                                            backgroundColor:
                                                                                                item.url === clickedItem
                                                                                                    ? "#d4edda"
                                                                                                    : item ===
                                                                                                      hoveredItem
                                                                                                    ? "#f2f2f2"
                                                                                                    : "white",
                                                                                            borderBottom:
                                                                                                "1px solid #dee2e6",
                                                                                            cursor: "pointer",
                                                                                            transition:
                                                                                                "background-color 0.2s ease-in-out",
                                                                                        }}
                                                                                        onMouseEnter={() =>
                                                                                            setHoveredItem(item)
                                                                                        }
                                                                                        onMouseLeave={() =>
                                                                                            setHoveredItem(null)
                                                                                        }
                                                                                        onClick={() => {
                                                                                            if (item.url !== "") {
                                                                                                handleClick(
                                                                                                    item.url,
                                                                                                    item.data_name
                                                                                                );
                                                                                            } else {
                                                                                                handleClick(
                                                                                                    "0",
                                                                                                    item.data_name
                                                                                                );
                                                                                            }
                                                                                        }}
                                                                                    >
                                                                                        <span>{item.data_name}</span>
                                                                                    </ListGroup.Item>
                                                                                );
                                                                            })}
                                                                        </ListGroup>
                                                                    ) : (
                                                                        <Spinner
                                                                            animation="border"
                                                                            role="status"
                                                                            style={{
                                                                                width: "3rem",
                                                                                height: "3rem",
                                                                                margin: "20px",
                                                                            }}
                                                                        >
                                                                            <span className="visually-hidden">
                                                                                Loading...
                                                                            </span>
                                                                        </Spinner>
                                                                    )}
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        );
                                                    })
                                                ) : (
                                                    <p>กรุณาเลือกปีการศึกษาก่อน</p>
                                                )}
                                            </Accordion>
                                        </div>
                                        {selectedItem === "" ? (
                                            <div className="col-md-9" style={{ backgroundColor: "white" }}>
                                                <p>กรุณาเลือกข้อมูล</p>
                                            </div>
                                        ) : (
                                            <div className="col-md-9" style={{ backgroundColor: "white" }}>
                                                {isLoading ? (
                                                    <Spinner
                                                        animation="border"
                                                        role="status"
                                                        style={{ width: "3rem", height: "3rem", margin: "20px" }}
                                                    >
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Spinner>
                                                ) : (
                                                    <>
                                                        <h5 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                                                            {selectedItemName}
                                                        </h5>
                                                        {selectedItem !== "0" ? (
                                                            <iframe
                                                                src={selectedItem}
                                                                style={{
                                                                    width: "100%",
                                                                    height: "600px",
                                                                    border: "none",
                                                                }}
                                                                allowFullScreen
                                                            ></iframe>
                                                        ) : (
                                                            <div>
                                                                {" "}
                                                                <img
                                                                    src={Img4}
                                                                    alt="ICT"
                                                                    style={{ width: "200px", height: "200px" }}
                                                                ></img>
                                                                <p>ขออภัยยังไม่มีข้อมูลในส่วนนี้</p>
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="ict" />
        </section>
    );
};
