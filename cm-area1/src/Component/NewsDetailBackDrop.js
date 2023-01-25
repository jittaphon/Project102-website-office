import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import colorSharp from "../assets/img/color-sharp.png";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
const { REACT_APP_PATH } = process.env;

export const NewsDetailBackDrop = () => {
    const { id } = useParams();
    const [Data, setData] = useState([]);
    const [TitleImage, setTitleImage] = useState();
    const [Image, setImage] = useState();
    useEffect(() => {
        async function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/FindNewsById/${id}`).then((res) => {
                setData(res.data);
                setTitleImage(res.data.image_title_url[0]);
                setImage(res.data.images[0]);
            });
        }
        get();
    }, [id]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="NewsDetailBackDrop" id="ChoiceBoxs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="NewsDetailBackDrop-bx wow zoomIn">
                            <div>
                                <h2 className="data-h">{Data.Headline}</h2>
                                <img className="imagedetailCover" src={TitleImage} alt="ict" />
                                <p className="data-content">{Data.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ paddingTop: "80px" }}>
                <div className="row">
                    <div className="col-12">
                        <div className="NewsDetailBackDrop-bx wow zoomIn">
                            <div>
                                <p style={{ textAlign: "start" }}>แกลลอรี่</p>
                            </div>
                            {Image ? (
                                <div class="row" className="container-img">
                                    {Image.map((i) => (
                                        <img key={i} src={i} alt="Girl in a jacket" className="zooms"></img>
                                    ))}
                                </div>
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
            <img className="background-image-left" src={colorSharp} alt="ict" />
        </section>
    );
};
