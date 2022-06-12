import React from 'react';
import Application from './Application';

function AppList({ apps, onDelete, onEdit}) {
    return (
        <table id="apps" className='App-table'>
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Submission Date</th>
                    <th>Resume Ver.</th>
                    <th>Online Assessment?</th>
                    <th>Phone Screening?</th>
                    <th>Interview?</th>
                    <th>Interview Date</th>
                    <th>Offer?</th>
                    <th>Amount</th>
                    <th>Notes</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {apps.map((app, i) => <Application 
                    app={app}
                    key={i} 
                    onDelete={onDelete}
                    onEdit={onEdit} />
                )}
            </tbody>
        </table>
    );
}

export default AppList;