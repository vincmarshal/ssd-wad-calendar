import React, { useEffect, useState } from "react";
import { Modal } from 'react-bootstrap-v5'
import './styles.css'

const AddEventModal = (props) => {

    const [name, setName] = useState();
    const [hour, setHour] = useState('01');
    const [min, setMin] = useState('00');
    const [ampm, setAMPM] = useState('AM');
    const [email, setEmail] = useState();

    const renderHours = () => {
        const hour = []
        for (let i = 1; i <= 12; i++) {
            hour.push(<option value={i}>{i < 10 ? '0' + i : i}</option>)
        }
        return hour
    }

    const renderMinutes = () => {
        const min = []
        for (let i = 0; i <= 59; i++) {
            min.push(<option value={i}>{i < 10 ? '0' + i : i}</option>)
        }
        return min
    }


    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
            <div>Add Event for {props.date}</div>
            <div className='modal-footer'>
                <label>Name</label>
                <input type="text" name='name' onChange={(e) => (setName(e.target.value))} />
                <div>
                    <label>Time</label>
                    <select onChange={(e) => (setHour(e.target.value))}>{renderHours()}</select>
                    <select onChange={(e) => (setMin(e.target.value))}>{renderMinutes()}</select>
                    <select onChange={(e) => (setAMPM(e.target.value))}>
                        <option value='AM'>AM</option>
                        <option value='PM'>PM</option>
                    </select>
                </div>
                <div>
                    <label>invites by</label>
                    <input type="email" name='email' onChange={(e) => (setEmail(e.target.value))} />
                </div>
                <button type='button' onClick={() => { props.addNewEvent(name, hour, min, ampm, email) }}>
                    <span className='text-secondary'>Add</span>
                </button>{' '}
                <button
                    type='button'
                    onClick={props.handleClose}
                >
                    Cancel
                </button>
            </div>
        </Modal>
    );
};

export default AddEventModal;