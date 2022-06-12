import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ApplicationList from '../components/ApplicationList';
import { FiPlusSquare } from 'react-icons/fi'

function HomePage({setAppToEdit}) {
    const [apps, setApps] = useState([]);
    const history = useHistory();

    const loadApps = async () => {
        const response = await fetch('/applications');
        const apps = await response.json();
        setApps(apps);
    }
	
    useEffect(() => {
        loadApps();
    }, []);

    const onDelete = async id => {
        const response = await fetch(`/applications/${id}`, { method: 'DELETE' });

        if (response.status === 204) {
            const getResponse = await fetch('/applications');
            const apps = await getResponse.json();
            setApps(apps);
        } else {
            console.error(`Failed to delete application with id = ${id}`)
        }
    }

    const onEdit = app => {
        setAppToEdit(app)
        history.push('/edit-application');
    }

    const onAdd = () => {
        history.push('/add-application')
    }

    return (
        <>
            <ApplicationList apps={apps} onDelete={onDelete} onEdit={onEdit}></ApplicationList>
            <FiPlusSquare onClick={onAdd} size={35} />
        </>
    );
}

export default HomePage;