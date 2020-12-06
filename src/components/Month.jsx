import React from 'react';

export default function Month({ year, month }) {
  function getMonth(year, month) {
    const thirtyDayMonths = [4, 6, 9, 11];
    let monthLength = thirtyDayMonths.includes(month) ? 30 : 31;

    if (month === 2) {
      monthLength = year % 4 ? 28 : 29;
    }
    let fullMonth = [];
    for (let i = 1; i <= monthLength; i++) {
      fullMonth.push(i);
    }
    return fullMonth;
  }

  function getWeekStart(year, month) {
    const date = new Date(year, month - 1, 1).getDay();
    return date === 0 ? 7 : date;
  }

  function weekDays() {
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  }

  function getMonthName(month) {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return monthNames[month - 1];
  }
  return (
    <div className="month-container">
      <div className="month-name">{getMonthName(month)}</div>
      <div className="month">
        {weekDays().map((i, j) => (
          <div key={i} className={'week week' + j}>
            {i}
          </div>
        ))}
        {getMonth(year, month).map((i) => (
          <div
            key={i}
            className="date"
            style={{
              gridColumnStart: i === 1 ? getWeekStart(year, month) : '',
            }}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
