import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import ListDatawebService from "./ListDatawebService";
import Spinner from "react-bootstrap/Spinner";

function FlushExample() {
    const [Data, setData] = useState("");

    useEffect(() => {
        function get() {
            axios.get("https://backend-dlict-dashboard.herokuapp.com/admin/getDataNew").then((res) => {
                setData(res.data);
            });
        }
        get();
    }, []);

    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>ปีการศึกษา-ภาคเรียน 2565-1</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        <div classname="accordion">
                            <ListGroup.Item>
                                <Table striped bordered hover size="sm">
                                    <tbody>
                                        {Data ? (
                                            Data.map((data) => {
                                                return <ListDatawebService key={data._id} data={data} />;
                                            })
                                        ) : (
                                            <Spinner animation="border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>
                                        )}
                                    </tbody>
                                </Table>
                            </ListGroup.Item>
                        </div>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FlushExample;

// /*ตรงนี้ axios ข้อมูลจาก DataBase*/
