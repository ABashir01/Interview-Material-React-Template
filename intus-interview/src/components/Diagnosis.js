import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';


/**
 * A card for a diagnosis with its code
 * 
 * @param {*} props - Pass in 'icdCode' and 'diagnosisCodeMap' and 'setDiagnosisCodeMap as props
 * @returns {React.ReactElement} A card with diagnosis description and code
 */
function Diagnosis(props) {
    const [diagnosisDescription, setDiagnosisDescription] = useState('');

    // Function to get diagnosis descriptions from either the map or from the API
    const getDiagnoses = async () => {
        
        // First, we check if the code is in the map
        if (props.diagnosisCodeMap.has(props.icdCode)) {

            //If it is, we simply set description as the value from the map
            setDiagnosisDescription(props.diagnosisCodeMap.get(props.icdCode));

        } else {

            // Makes call to API
            let response = await fetch("https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code&terms=" + props.icdCode + "&maxList=1");
            let diagnosis_json = await response.json();
            
            // If malformed input, set description to not available
            if (diagnosis_json[0] === 0) {
                setDiagnosisDescription("Description not available");
            } else {
                setDiagnosisDescription(diagnosis_json[3][0][1]);
            

                //Add description to diagnosisCodeMap
                props.setDiagnosisCodeMap(new Map(props.diagnosisCodeMap.set(props.icdCode, diagnosis_json[3][0][1])));
            }
        }
    }

    useEffect(() => {
        getDiagnoses();
    }, [])

    return (
        <Card className='diagnosis-card'>
            <span className='diagnosis-name'>{diagnosisDescription}</span>
            <span className='diagnosis-ICD10-code'>{props.icdCode}</span>
        </Card>
    )
}

export default Diagnosis;