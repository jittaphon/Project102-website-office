import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const GroupData = (data, className) => {
    return (
        <div class="col-3">
            <div class="card-year card-4">
                <img src="image/dot.png" alt="ict" />
                <Link
                    className="text-linkdata "
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/information/data/${data.data._id}`}
                ></Link>
            </div>
        </div>
    );
};
