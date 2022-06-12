import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateApplicationPage from './pages/CreateApplicationPage';
import EditApplicationPage from './pages/EditApplicationPage';

function App() {
  const [appToEdit, setAppToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <title>Application Tracker</title>

        <header className="App-header">
          <h1>CS Job Application Log</h1>
          <p>
            As you apply to jobs in the tech industry, keep yourself organized and track all of the
            applications you submit on this page. Edit each row to mark your progress through the
            hiring process, and make use of the notes field to monitor factors contributing to your
            outcomes, impressions of interviewers and their company, or any other information you
            find relevant to your job search.
          </p>

          <nav>
            <Link to='/' className='App-nav'>Home</Link>
            <Link to='/add-application' className='App-nav'>Add</Link>
          </nav>
        </header>

        <main className='App-main'>
          <Route path="/" exact>
            <HomePage setAppToEdit={setAppToEdit} />
          </Route>
          <Route path="/add-application">
            <CreateApplicationPage />
          </Route>
          <Route path="/edit-application">
            <EditApplicationPage appToEdit={appToEdit} />
          </Route>
        </main>

        <footer className='App-footer'>&copy; 2022 Taylor Homan</footer>
      </Router>
    </div>
  );
}

export default App;