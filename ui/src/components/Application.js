import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi'

function Application({ app, onDelete, onEdit}) {
    return (
        <tr>
            <td>{app.companyName}</td>
            <td>{app.submissionDate}</td>
            <td>{app.resumeVer}</td>
            <td>{app.onlineAssess}</td>
            <td>{app.phoneScreen}</td>
            <td>{app.interview}</td>
            <td>{app.interviewDate}</td>
            <td>{app.offerReceived}</td>
            <td>{app.offerAmount}</td>
            <td>{app.notes}</td>
            <td><FiEdit onClick={() => onEdit(app)} /></td>
            <td><FiTrash2 onClick={() => onDelete(app._id)}/></td>
        </tr>
    );
}

export default Application;