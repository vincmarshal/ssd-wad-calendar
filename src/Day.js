import React, { useEffect, useState } from "react";
import './styles.css'
import AddEventModal from "./AddEventModal";
const Day = (props) => {
    const [date, setDate] = useState(null);
    const [event, setEvent] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
        setDate(props.date)
    }, [])

    useEffect(() => {
        renderEvent()
    }, [event])

    const addNewEvent = (name, hour, min, ampm, email) => {
        const newEvent = [...event, {
            name: name,
            time: hour + ':' + min + ' ' + ampm,
            email: email,
            color: randomColor()
        }]
        setEvent(newEvent)
        setShowAddModal(false)
    }

    const ShowNewEventModal = () => {
        if (event.length < 3) {
            setShowAddModal(true)
        }
    }

    const randomColor = () => {
        return '#' + Math.floor((Math.random() * 16777214) +1).toString(16);
    }

    const renderEvent = () => {
        console.log(event)
        const res = []
        event.map((item) => {
            console.log('ceking', item)
            res.push(
                <div className='event' style={{ backgroundColor: item.color }}>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <div>{item.time}</div>
                </div>
            )
        })
        return res
    }

    return (
        <td key={date}>
            <div className="day" onClick={() => { ShowNewEventModal() }}>
                {date < 1 ? '' : date}
            </div>
            {renderEvent()}
            <AddEventModal
                show={showAddModal}
                handleClose={() => setShowAddModal(false)}
                date={date}
                addNewEvent={addNewEvent}
            />
        </td>
    );
};

export default Day;