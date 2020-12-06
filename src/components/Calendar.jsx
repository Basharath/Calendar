import React, { useState } from 'react';
import Month from './Month';
import Github from './Github';

const currentYear = new Date().getFullYear();

export default function Calendar() {
  const [year, setYear] = useState(currentYear);

  function getCalender(year) {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    return months.map((i) => <Month year={year} month={i} key={i} />);
  }

  function handleChange(amount) {
    setYear((prevYear) => prevYear + amount);
  }
  return (
    <>
      <Github github="https://github.com/Basharath/Calendar" />
      <div className="yearContainer">
        <i
          className="far fa-arrow-alt-circle-left arrows"
          onClick={() => handleChange(-1)}
        ></i>
        <span className="year">{year}</span>
        <i
          className="far fa-arrow-alt-circle-right arrows"
          onClick={() => handleChange(1)}
        ></i>
      </div>
      <div className="calendar">{getCalender(year)}</div>
    </>
  );
}
