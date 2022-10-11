import { Container, Col } from "react-bootstrap";
import  ProfileDetail  from "./Profile";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


export const ProfilePage = (className) => {

    const [Data, setData] = useState("");

    useEffect(() => {
        function get() {
            axios.get("/admin/getData").then((res) => {
                setData(res.data);
            });
        }
        get();
    }, []);

    return (
        <section className="banner" id="home">
            <Container>
                <Col xs={12} md={6} xl={9}>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="taglineProfile">ทำเนียบบุคคลากร</span>
                            </div>
                        )}
                    </TrackVisibility>
                </Col>

                {Data ? (
                    Data.map((data) => {
                      return <ProfileDetail key={data._id} data={data} />;
                    })
                ) : (
                    <div>not data</div>
                )}
            </Container>
        </section>
    );
};
