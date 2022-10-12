import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInr } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Contact = (className) => {
    const form = useRef();
    const first_name = useRef();
    const last_name = useRef();
    const email = useRef();
    const phone = useRef();
    const message = useRef();
    const [buttonText, setButtoText] = useState("Send");

    const SendEmail = async (e) => {
        e.preventDefault();
        const data = {
            name: first_name.current?.value,
            last_name: last_name.current?.value,
            email: email.current?.value,
            message: message.current?.value,
            phone: phone.current?.value,
        };
        if (
            data.name === "" ||
            data.last_name === "" ||
            data.email === "" ||
            data.phone === "" ||
            data.message === ""
        ) {
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text: "กรุณากรอกข้อมูลให้ครบถ้วน",
            });
        } else {
            emailjs.sendForm("service_ynrymn4", "template_alzz3mo", form.current, "Rf2dM3roYhmPJ5a40").then(
                (result) => {
                    Swal.fire("ส่งสำเร็จ", "", "success").then(() => {
                        window.location.reload();
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <h3>ติดต่อเรา</h3>
                        <p>
                            สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต 1 อาคารอำนวยการกลาง ชั้น 4
                            ศาลากลางจังหวัดเชียงใหม่ อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่ 50300
                        </p>
                        <p> ติดต่อเราได้ที่ : 053-112333 </p>
                        <p> โทรสาร : 053-112677 </p>
                        <p> https://www.chiangmaiarea1.go.th </p>
                        <p> ict@chiangmaiarea1.go.th </p>
                    </Col>
                    <Col size={12} md={6}>
                        <h3>Social Media</h3>
                        <p>
                            <a
                                href="https://www.facebook.com/profile.php?id=100057185991041"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faFacebook} style={{ paddingRight: "10px" }} />
                                CM AREA1 Facebook
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.youtube.com/channel/UCtjlRN5V2b4tDvRCdzacp_w"
                                target="_blank"
                                rel="noreferrer"
                            ><FontAwesomeIcon icon={faYoutube} style={{ paddingRight: "10px" }} />
                                Youtube
                            </a>
                        </p>
                        <p>
                            <a href="https://twitter.com/nznIcVrk22iUFjZ" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} style={{ paddingRight: "10px" }} />
                                Twitter
                            </a>
                        </p>
                        <p>
                            {" "}
                            <a href="https://www.instagram.com/cmarea_1/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInr} style={{ paddingRight: "10px" }} />
                                Instagram
                            </a>
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <h2>ติดต่อเราผ่าน Email</h2>

                        <form ref={form} onSubmit={SendEmail}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input ref={first_name} type="text" name="first_name" placeholder="first_name" />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input ref={last_name} type="text" name="last_name" placeholder="last_name" />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input ref={email} type="email" name="email" placeholder="email" />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input ref={phone} type="text" name="phone" placeholder="phone" />
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea rows="6" ref={message} name="message" placeholder="Message"></textarea>
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col size={12} md={6}>
                        <iframe
                            className="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.131220495738!2d98.96895791484755!3d18.836832387225602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3b070e20738f%3A0x6bed0c29a03fb4f8!2z4Liq4Liz4LiZ4Lix4LiB4LiH4Liy4LiZ4LmA4LiC4LiV4Lie4Li34LmJ4LiZ4LiX4Li14LmI4LiB4Liy4Lij4Lio4Li24LiB4Lip4Liy4Lib4Lij4Liw4LiW4Lih4Lio4Li24LiB4Lip4Liy4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmIIOC5gOC4guC4lTEgKOC4quC4nuC4my7guYDguIrguLXguKLguIfguYPguKvguKHguYgg4LmA4LiC4LiVMSk!5e0!3m2!1sth!2sth!4v1665453087937!5m2!1sth!2sth"
                            width="600"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
