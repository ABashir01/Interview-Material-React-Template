import React, {useState, useEffect} from 'react';
import Participant from './Participant';


 
/**
 * Represents the list of participants with the header
 * 
 * @param {*} props - Pass 'participantsList' in as a prop
 * @returns {React.ReactElement} A list of participant components with a header
 */
function ParticipantList(props) {
    const [participants, setParticipants] = useState([]);
    const [reSorted, setReSorted] = useState(false);
    const [sortType, setSortType] = useState("codes"); // Extensibility of sorting
    
    
    useEffect(() => {
        if (participants.length === 0) {
            setParticipants(props.participantsList);
        }
        
    }, [props.participantsList, reSorted])


    // DISCLAIMER: When on codes, will only appear to swap when reSorted is false because every card has a code value of '10' from api
    const handleSortClick = () => {
        let sorted_list = participants;
        
        if (sortType === "alphabeticalNames") { // Extensibility of sorting
            sorted_list = participants.sort((a,b) => b['firstName'].toLowerCase().localeCompare(a['firstName'].toLowerCase()));
        } else { // Default behavior is "codes"
            console.log("Entering else statement");
            sorted_list = participants.sort((a,b) => a['diagnoses'].length - b['diagnoses'].length);
        }

        console.log("reSorted: ", reSorted);
        
        // If reSorted is false, reverse the sorted_list
        if (!reSorted) {
            sorted_list = sorted_list.reverse();
        }
        

        setParticipants(sorted_list);
        setReSorted(!reSorted);

    }

    return (
        <div className='participant-list'>
            <div className='header'>
                <span className='header-participant-name'>Participant Name</span>
                <span className='wrapper'><span className='header-ICD-Code'>ICD Codes <img className='filter_image' src={reSorted ? "/orderFilter_Up.png" : "/orderFilter_Down.png"} onClick={handleSortClick}/></span></span>
                
            </div>
            <hr />
            <div className='body'>
                {participants.map((participant, index) => (
                            
                            <Participant patient={participant}/>
                        ))}
            </div>
        </div>
    )
}

export default ParticipantList;