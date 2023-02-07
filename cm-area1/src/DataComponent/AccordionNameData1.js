import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import { v4 as uuidv4 } from "uuid";
const { REACT_APP_IMGEPATH } = process.env;

export const AccordionNameData1 = (data, className) => {
    console.log(data.data.data);
    return (
        <Accordion.Item eventKey={uuidv4()}>
            <Accordion.Header>{data.data.name_date}</Accordion.Header>
            <Accordion.Body>
                <ListGroup>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="col-md-7">Name</th>
                                <th>data visualization</th>
                                <th>CSV</th>
                                <th>PDF</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.data.map((x, index) => (
                                <tr>
                                    <td className="col-md-7">{x.name}</td>
                                    <td>
                                        <p style={{ textAlign: "center" }}>
                                            {x.url ? (
                                                <a href={x.url} target="_blank" rel="noreferrer">
                                                    <img
                                                        src={`${REACT_APP_IMGEPATH}/images/data-visualization.png`}
                                                        alt="Girl in a jacket"
                                                        width="50"
                                                        height="50"
                                                        className="pointer"
                                                    ></img>
                                                </a>
                                            ) : (
                                                <a href={x.url} target="_blank" rel="noreferrer" className="disabled">
                                                    <img
                                                        src={`${REACT_APP_IMGEPATH}/image/data-visualization.png`}
                                                        alt="Girl in a jacket"
                                                        width="50"
                                                        height="50"
                                                        className="pointer"
                                                        style={{ opacity: 0.5 }}
                                                    ></img>
                                                </a>
                                            )}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            {x.csv ? (
                                                <a href={x.csv} target="_blank" rel="noreferrer">
                                                    <img
                                                        src={`${REACT_APP_IMGEPATH}/images/csv.png`}
                                                        alt="Girl in a jacket"
                                                        width="50"
                                                        height="50"
                                                        className="pointer"
                                                    ></img>
                                                </a>
                                            ) : (
                                                <a href={x.csv} target="_blank" rel="noreferrer" className="disabled">
                                                    <img
                                                        src={`${REACT_APP_IMGEPATH}/images/csv.png`}
                                                        alt="Girl in a jacket"
                                                        width="50"
                                                        height="50"
                                                        className="pointer"
                                                        style={{ opacity: 0.5 }}
                                                    ></img>
                                                </a>
                                            )}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            {x.pdf ? (
                                                <a href={x.pdf} target="_blank" rel="noreferrer">
                                                    <img
                                                        src={`${REACT_APP_IMGEPATH}/images/pdf.png`}
                                                        alt="Girl in a jacket"
                                                        width="50"
                                                        height="50"
                                                        className="pointer"
                                                    ></img>
                                                </a>
                                            ) : (
                                                <a
                                                    href={x.pdf.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="disabled"
                                                >
                                                    <img
                                                        src={`${REACT_APP_IMGEPATH}/images/pdf.png`}
                                                        alt="Girl in a jacket"
                                                        width="50"
                                                        height="50"
                                                        className="pointer"
                                                        style={{ opacity: 0.5 }}
                                                    ></img>
                                                </a>
                                            )}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
    );
};
