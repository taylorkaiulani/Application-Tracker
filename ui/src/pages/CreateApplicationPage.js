import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


export const CreateApplicationPage = () => {
    const history = useHistory();

    const [company, setCompany] = useState('');
    const [subDate, setSubDate] = useState('');
    const [resume, setResume] = useState('');
    const [oa, setOA] = useState('');
    const [phone, setPhone] = useState('');
    const [interview, setInterview] = useState('');
    const [intDate, setIntDate] = useState('');
    const [offer, setOffer] = useState('');
    const [amount, setAmount] = useState('');
    const [notes, setNotes] = useState('');

    const addApplication = async () => {
        const newApplication = { company, subDate, resume, oa, phone, interview, intDate, offer, amount, notes };

        const response = await fetch('/applications', {
            method: 'POST',
            body: JSON.stringify(newApplication),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.status === 201){
            alert("Application added successfully!");
        } else {
            alert(`Uh-oh! Failed to add application, please try again.`);
        }

        history.push("/");
    };

    return (
        <div className='App-form'>
            <h2>Add Application</h2>
            <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={e => setCompany(e.target.value)} />
            <input
                type="date"
                placeholder='Submission Date'
                value={subDate}
                onChange={e => setSubDate(e.target.value)} />
            <input
                type="number"
                value={resume}
                placeholder="Resume Version"
                onChange={e => setResume(e.target.value)} />
            <select onChange={e => setOA(e.target.value)}>
                <option>Online Assessment?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <select onChange={e => setPhone(e.target.value)}>
                <option>Phone Screening?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <select onChange={e => setInterview(e.target.value)}>
                <option>Interview?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <input 
                type="date"
                placeholder="Interview Date"
                value={intDate}
                onChange={e => setIntDate(e.target.value)} />
            <select onChange={e => setOffer(e.target.value)}>
                <option>Offer Received?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <input
                type="number"
                placeholder="Offer Amount"
                value={amount}
                onChange={e => setAmount(e.target.value)} />
            <input
                type="text"
                placeholder="Notes"
                value={notes}
                onChange={e => setNotes(e.target.value)} />
            <button
                onClick={addApplication}
            >Add</button>
        </div>
    );
}

export default CreateApplicationPage;