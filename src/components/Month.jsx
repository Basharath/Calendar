import React from 'react';
import MonthMode from './MonthMode';

export default function Month(props) {
  const {
    year,
    month,
    currentYear,
    currentMonth,
    currentDate,
    mode,
    handleMonth,
  } = props;

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
    <>
      <div className={'month-container mode-' + mode}>
        <MonthMode
          month={month}
          mode={mode}
          getMonthName={getMonthName}
          handleMonth={handleMonth}
        />
        <div className="monthDates">
          {weekDays().map((i, j) => (
            <div key={i} className={i + ' day'}>
              {i}
            </div>
          ))}
          {getMonth(year, month).map((i) => {
            const current =
              month === currentMonth + 1 &&
              i === currentDate &&
              year === currentYear
                ? ' current'
                : '';

            return (
              <div
                key={i}
                className={`${getMonthName(month)} ${i} date ${current}`}
                style={{
                  gridColumnStart: i === 1 ? getWeekStart(year, month) : '',
                }}
              >
                {i}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
