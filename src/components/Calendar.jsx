import React, { useState } from 'react';
import Month from './Month';
import Github from './Github';

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDate = date.getDate();

export default function Calendar() {
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [mode, setMode] = useState('');

  function getCalender() {
    if (mode === 'month') {
      return (
        <Month
          year={year}
          month={month + 1}
          currentMonth={currentMonth}
          currentYear={currentYear}
          currentDate={currentDate}
          mode={mode}
          handleMonth={handleMonth}
        />
      );
    }
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    return months.map((i) => (
      <Month
        year={year}
        month={i}
        currentMonth={currentMonth}
        currentYear={currentYear}
        currentDate={currentDate}
        key={i}
        mode={mode}
      />
    ));
  }

  function handleYear(amount) {
    setYear((prevYear) => prevYear + amount);
  }

  function handleMonth(amount) {
    setMonth((prevMonth) => {
      if (prevMonth + amount < 0) {
        handleYear(-1);
        return 11;
      }
      if (prevMonth + amount > 11) {
        handleYear(1);
        return 0;
      }
      return prevMonth + amount;
    });
  }

  function handleCalendar() {
    if (mode === '') setMode('month');
    else setMode('');
  }

  async function handleScroll() {
    await setYear(currentYear);
    await setMonth(currentMonth);

    const element = await document.querySelector(`.month${currentMonth + 1}`);
    const elementPosition = await element.getBoundingClientRect().bottom;
    await window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });

    const dateElement = document.querySelector('.current');

    setTimeout(() => {
      dateElement.style.transform = 'scale(2)';
      dateElement.style.transition = 'transform 1s ease';
      setTimeout(() => {
        dateElement.style.transform = 'scale(1)';
      }, 500);
    }, 1000);
  }

  return (
    <>
      <Github github="https://github.com/Basharath/Calendar" />
      <div className="topContainer">
        <div className="yearContainer">
          <i
            className="fas fa-chevron-circle-left arrows"
            onClick={() => handleYear(-1)}
          ></i>
          <span
            className="year"
            onClick={handleCalendar}
            title="Click to toggle"
          >
            {year}
          </span>
          <i
            className="fas fa-chevron-circle-right arrows"
            onClick={() => handleYear(1)}
          ></i>
        </div>
        {year !== currentYear || month !== currentMonth ? (
          <div className="yearJump" onClick={handleScroll}>
            Jump to today
          </div>
        ) : null}
      </div>

      <div className="calendar">{getCalender()}</div>
    </>
  );
}
