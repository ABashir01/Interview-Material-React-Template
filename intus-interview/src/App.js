import './App.scss';

import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import ParticipantPage from './components/ParticipantPage';
import DiagnosisPage from './components/DiagnosisPage';

function App() {
  const [participants, setParticipants] = useState([]);
  const [diagnosisCodeMap, setDiagnosisCodeMap] = useState(new Map());

  // Fetches the participants from the server and sorts them
  const getParticipants = async () => {
    let response = await fetch("http://localhost:5000/participants");
    let participant_json = await response.json();

    let sorted_list = participant_json.sort((a,b) => a['diagnoses'].length - b['diagnoses'].length)
    setParticipants(sorted_list);
  }

  useEffect (() => {
    getParticipants();
  }, []);


  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<ParticipantPage participantsList={participants}/>}/>
          <Route path="/participant" element={<DiagnosisPage diagnosisCodeMap={diagnosisCodeMap} setDiagnosisCodeMap={setDiagnosisCodeMap}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
