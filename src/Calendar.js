import React, { useState } from "react";
import './styles.css'
import Day from './Day'
const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const currentFullDate = new Date();
    const currentDate = currentFullDate.getDate()
    const currentDay = currentFullDate.getDay()
    const currentMonth = currentFullDate.getMonth();
    const currentYear = currentFullDate.getFullYear();

    const getMonthString = (month) => {
        switch (month) {
            case 0:
                return 'January'
            case 1:
                return 'February'
            case 2:
                return 'March'
            case 3:
                return 'April'
            case 4:
                return 'May'
            case 5:
                return 'June'
            case 6:
                return 'July'
            case 7:
                return 'August'
            case 8:
                return 'September'
            case 9:
                return 'October'
            case 10:
                return 'November'
            case 11:
                return 'December'
            default:
                return ''
        }
    }


    const getFirstDay = () => {
        const dateDiff = (currentDay - currentDate) % 7
        return (7 + dateDiff) % 7
    }

    const renderCalendarDays = () => {
        const currentDate = new Date();
        const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
        let firstDayOfWeek = getFirstDay();
        let date = 1 - firstDayOfWeek
        const calendarDays = []
        for (let i = date; i <= totalDays;) {
            calendarDays.push(renderWeek(i, totalDays))
            i += 7
        }


        return calendarDays;
    }

    const renderWeek = (firstDayofWeek, totalDays) => {
        const calendarDays = [];
        for (let j = 0; j < 7 && firstDayofWeek <= totalDays; j++) {
            if (firstDayofWeek < 1) {
                calendarDays.push(
                    <Day date={firstDayofWeek} />
                );
            } else {
                calendarDays.push(
                    <Day key={firstDayofWeek} style={firstDayofWeek == currentDate ? { background: 'red' } : { background: 'blue' }} date={firstDayofWeek} />
                )
            }
            firstDayofWeek++
        }
        return (<tr>{calendarDays}</tr>)
    }

    return (
        <div className="container">
            <h1> {getMonthString(currentMonth)} {currentYear}</h1>
            <table>
                <thead>
                    <tr>
                        <th className="box">Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCalendarDays()}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;