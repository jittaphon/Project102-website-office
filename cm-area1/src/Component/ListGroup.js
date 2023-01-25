import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
const { REACT_APP_PATH } = process.env;
function FlushExample() {
    const [DataAbout, setDataAbout] = useState();

    useEffect(() => {
        async function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/FindMission`).then((res) => {
                setDataAbout(res.data);
            });
        }
        get();
    }, []);
    return (
        <ListGroup variant="flush">
            {DataAbout ? (
                DataAbout.map((data, index) => {
                    return <ListGroup.Item key={index}>{data.text}</ListGroup.Item>;
                })
            ) : (
                <Spinner animation="border" role="status" style={{ width: "3rem", height: "3rem", margin: "20px" }}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </ListGroup>
    );
}

export default FlushExample;
