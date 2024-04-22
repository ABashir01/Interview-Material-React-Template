import React from 'react';
import {Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


/**
 * Represents a single participant
 * 
 * @param {*} props - Pass in 'patient' as a prop
 * @returns {React.ReactElement} A participant card
 */
function Participant(props) {

    const navigate = useNavigate();
    const data = {patient: props.patient};

    const handleClick = () => {
        navigate("/participant", {state: data});
    };

    return (
        <Card className='participant-card' onClick={handleClick}>
            <span className='participant-name'>{props.patient['firstName']} {props.patient['lastName']}</span>
            <span className='wrapper'><span className='participant-ICD10-code'>{props.patient['diagnoses'].length}</span></span>
        </Card>
    )
}

export default Participant;