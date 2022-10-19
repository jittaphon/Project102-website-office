import React from "react";
import "animate.css";


const ListDatawebService = ({classname, data}) => {

    return (
        <tr>
            <td>{data.name}</td>
            <td>
                <a href={data.namecsv}>.CSV</a>
            </td>
            <td>
                <a href={data.namejson}>.JSON</a>
            </td>
        </tr>
    );
};

export default ListDatawebService;
