import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


export const EditApplicationPage = ({appToEdit}) => {
    const history = useHistory();

    const [company, setCompany] = useState(appToEdit.companyName);
    const [subDate, setSubDate] = useState(appToEdit.submissionDate);
    const [resume, setResume] = useState(appToEdit.resumeVer);
    const [oa, setOA] = useState(appToEdit.onlineAssess);
    const [phone, setPhone] = useState(appToEdit.phoneScreen);
    const [interview, setInterview] = useState(appToEdit.interview);
    const [intDate, setIntDate] = useState(appToEdit.interviewDate);
    const [offer, setOffer] = useState(appToEdit.offerReceived);
    const [amount, setAmount] = useState(appToEdit.offerAmount);
    const [notes, setNotes] = useState(appToEdit.notes);

    const editApplication = async () => {
        const editedApplication = { company, subDate, resume, oa, phone, interview, intDate, offer, amount, notes };

        const response = await fetch(`/applications/${appToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedApplication),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.status === 200){
            alert("Application updated successfully!");
        } else {
            alert(`Uh-oh! Failed to update application, please try again.`);
        }

        history.push("/");
    };

    return (
        <div className='App-form'>
            <h2>Edit Application</h2>
            <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={e => setCompany(e.target.value)} />
            <input
                type="date"
                placeholder="Submission Date"
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
                onClick={editApplication}
            >Save</button>
        </div>
    );
}

export default EditApplicationPage;