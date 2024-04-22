import React, {useState, useEffect} from 'react';
import Diagnosis from './Diagnosis';


/**
 * A list of the diagnoses with a header with name and number of codes
 * 
 * @param {*} props - Pass in 'patient' and 'diagnosisCodeMap' and 'setDiagnosisCodeMap' as a prop
 * @returns {React.ReactElement} A list of diagnosis components with a header
 */
function DiagnosisList(props) {

    return (
        <div className='diagnosis-list'>

            <div className='header'>
                <span className='participant-name-span'><h2 className='participant-name'>{props.patient['firstName']} {props.patient['lastName']}</h2></span>
                <hr />
                <span className='icd-codes-span'>ICD Codes ({props.patient['diagnoses'].length})</span>
            </div>
            
            <div className='body'>
                {props.patient['diagnoses'].map((diagnosis, index) => (
                    <Diagnosis icdCode={diagnosis['icdCode']} diagnosisCodeMap={props.diagnosisCodeMap} setDiagnosisCodeMap={props.setDiagnosisCodeMap}/>
                ))}
            </div>
            <br />
            <br />
        </div>
    )
}

export default DiagnosisList;