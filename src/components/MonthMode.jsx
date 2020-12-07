import React from 'react';

export default function MonthMode({ mode, month, getMonthName, handleMonth }) {
  return (
    <>
      <div className={`monthNameContainer month${month}`}>
        {mode && (
          <div className="month-mode-name">
            <i
              className="far fa-arrow-alt-circle-left arrows-month"
              onClick={() => handleMonth(-1)}
            ></i>
            <span>{getMonthName(month)}</span>
            <i
              className="far fa-arrow-alt-circle-right arrows-month"
              onClick={() => handleMonth(1)}
            ></i>
          </div>
        )}
        {!mode && <span className="monthName">{getMonthName(month)}</span>}
      </div>
    </>
  );
}
