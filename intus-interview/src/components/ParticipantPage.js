import React from 'react';
import ParticipantList from './ParticipantList';


/**
 * A wrapper page for ParticipantList
 * 
 * @param {*} props - Receives 'participantsList' as a prop
 * @returns {React.ReactElement} A ParticipantList element with a title
 */
function ParticipantPage(props) {
    return (
        <div className='participant-page'>
            <span className='participants-block'><h2 className='participants-text'>Participants</h2></span>
            <ParticipantList participantsList={props.participantsList}/>
        </div>
    )
}

export default ParticipantPage;