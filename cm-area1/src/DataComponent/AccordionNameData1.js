import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { v4 as uuidv4 } from "uuid";
export const AccordionNameData1 = (data, className) => {
    return (
        <Accordion.Item eventKey={uuidv4()}>
            <Accordion.Header>{data.data.name_date}</Accordion.Header>
            <Accordion.Body></Accordion.Body>
        </Accordion.Item>
    );
};
