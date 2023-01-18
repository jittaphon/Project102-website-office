import React from "react";
import { Link } from "react-router-dom";
import TrackVisibility from "react-on-screen";
export const BoxYear = (data, className) => {
    return (
        <div class="col-3 mx-c my-4 ">
            <TrackVisibility>
                {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                        <div class="card card-4">
                            <Link
                                className="text-linkdata "
                                style={{ textDecoration: "none", color: "black" }}
                                to={`/information/data/${data.data._id}`}
                            >
                                <h1>{data.data.name_year}</h1>
                            </Link>
                        </div>
                    </div>
                )}
            </TrackVisibility>
        </div>
    );
};
