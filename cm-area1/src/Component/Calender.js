import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import React, { useState } from "react";
export default function Quote() {
    const [value, onChange] = useState(new Date());
    return (
        <div className="calendarContainer">
            <Calendar  onChange={onChange} value={value}/>
        </div>
    );
}
