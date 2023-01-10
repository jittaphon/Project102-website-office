import "react-multi-carousel/lib/styles.css";
import "react-awesome-button/dist/styles.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
const { REACT_APP_PATH } = process.env;

export const OPMBackDrop = () => {
    const [Data, setData] = useState("");
    useEffect(() => {
        function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/FindPDF`).then((res) => {
                setData(res.data);
            });
        }
        get();
    }, []);

    return (
        <section className="BackDrop" id="BackDrop">
            <div className="container-About">
                {Data ? (
                    Data.map((Data) => {
                        return (
                            <iframe src={`${Data.url}`} style={{ height: '1000px' }} frameborder="0" height="100%" width="100%" title="myFrame"></iframe>
                        );
                    })
                ) : (
                    <Spinner animation="border" role="status" style={{ width: "3rem", height: "3rem", margin: "20px" }}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
            </div>
        </section>
    );
};
