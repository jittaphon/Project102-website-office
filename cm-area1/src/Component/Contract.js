import { useState , useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export const Contact = () => {
  const form = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();
  const [buttonText, setButtonText] = useState('Send');

  const SendEmail = async (e) => {

    e.preventDefault();
    const data = {
        name:first_name.current?.value,
        last_name:last_name.current?.value,
        email:email.current?.value,
        message:message.current?.value,
        phone:phone.current?.value,
    }
    if(data.name === '' || data.last_name === '' || data.email === '' || data.phone === ''|| data.message === ''){
        Swal.fire({
            icon: 'error',
            title: 'เกิดข้อผิดพลาด',
            text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
          })
    }else{
   
    emailjs.sendForm('service_ynrymn4', 'template_alzz3mo', form.current, 'Rf2dM3roYhmPJ5a40')
    .then((result) => {
        Swal.fire(
            'ส่งสำเร็จ',
            '',
            'success'
          ).then(() => {
            window.location.reload();
          })
         

    }, (error) => {
        console.log(error.text);
    });

    }


};

    
return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>ติดต่อเราผ่าน Email</h2>

                <form ref={form} onSubmit={SendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <input ref={first_name} type="text" name="first_name" placeholder="first_name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input ref={last_name} type="text" name="last_name" placeholder="last_name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input  ref={email} type="email" name="email" placeholder="email"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input ref={phone} type="text" name="phone" placeholder="phone"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  ref={message} name="message" placeholder="Message"></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
  
  };

 
