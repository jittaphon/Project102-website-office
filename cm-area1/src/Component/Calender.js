import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalenderStyle.css";
import React, { useState } from "react";
export default function Quote() {
    const [value, onChange] = useState(new Date());
    
    return (
        <div className='calendar-container'>
            <Calendar  onChange={onChange} value={value}/>
        </div>
    );
}
