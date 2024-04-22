import React from "react";
import DiagnosisList from "./DiagnosisList";
import { useNavigate, useLocation } from "react-router-dom";

// 
/**
 * A wrapper page for DiagnosisList with a back button that goes to home
 * 
 * @param {*} props - Pass in 'diagnosisCodeMap' and 'setDiagnosisCodeMap' as a prop
 * @returns {React.ReactElement} A wrapper page for DiagnosisList
 */
function DiagnosisPage(props) {

    const navigate = useNavigate();

    const location = useLocation();
    const data = location.state;

    const handleBackClick = () => {
        navigate("/");
    }

    return (
        <div className="diagnosis-page">

            <div className="padding-div">
                <button type="button" className="btn back-button" onClick={handleBackClick}><h3>{"< Back"}</h3></button>
            </div>

            <DiagnosisList patient={data.patient} diagnosisCodeMap={props.diagnosisCodeMap} setDiagnosisCodeMap={props.setDiagnosisCodeMap}/>

            <div className="padding-div"></div>
        </div>
    )
}

export default DiagnosisPage;