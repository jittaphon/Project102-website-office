import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const SelectYear = (data, className) => {
    return <option value={data.data._id}>{data.data.name_year}</option>;
};
