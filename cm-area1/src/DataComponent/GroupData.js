import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
export const GroupData = (data, className) => {
    const { year } = useParams();
    return (
        <div className="col-3">
            <div className="card-year card-4">
                <Link
                    className="text-linkdata "
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/information/data/${year}/${data.data._id}/`}
                >
                    <div>
                        <img className="icon" src={data.data.icon} alt="ict" />
                        <p style={{ fontSize: "15px", margin: "25px" }}>{data.data.name_data}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};