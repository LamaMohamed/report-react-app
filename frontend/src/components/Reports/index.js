import { ReportTypeString, ReportStateString, ReportState } from '../../interface';
import { Link } from 'react-router-dom';
import './style.css'

export default function ReportComponent(props) {
    return (
        <div className="ReportComponent">
            <div className="text-container">
                <div className="text-col">
                    <span className="text-value">Id: <span>{props.id}</span></span>
                    <span className="text-value">State: <span>{ReportStateString[props.state]}</span></span>
                    <a href="">Details</a>
                </div>
                <div className="text-col">
                    <span className="text-value" style={{marginBottom:'5px'}}>Type: <span >{ReportTypeString[props.type]}</span></span>
                    <span className="text-value">Message: <span>{props.message}</span></span>
                </div>  
            </div>
            <div className="button-container">
                <button style={{marginBottom:'5px'}} onClick={() => props.updateReportStatus(props.id, ReportState.BLOCKED)}>Block</button>
                <button onClick={() => props.updateReportStatus(props.id, ReportState.RESOLVED)}>Resolve</button>
            </div>
        </div>
    )
}