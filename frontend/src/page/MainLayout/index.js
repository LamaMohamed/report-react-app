import { Component } from 'react'
import ReportComponent from '../../components/Reports'
import { getAllReports, updateReport } from '../../reportApi'
import './style.css'

export default class LayoutComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reports: [],
            errorMessage: ''
        }
    }

    async componentDidMount() {
        await this.getReports(); 
    }

    async getReports() {
        await getAllReports().then((data) => {
            this.setState({ reports: data.reports });
        })
    }
    
    updateReportStatus = async (reportId, status) => {
        await updateReport(reportId, status).then((res) => {
            var errorMessage = res.error && res.error.message
            this.setState({ errorMessage });
            this.getReports();
        })
    }

    render() {
        return (
            <div className="LayoutComponent">
                <header className="header" style={{margin:'10px'}}>
                    Report
                </header>
                <div className='error-message'>
                    {this.state.errorMessage}
                </div>
                {
                    this.state.reports.map((report) => (
                        <ReportComponent
                            key={report.id}
                            id={report.id}
                            state={report.state}
                            type={report.type}
                            message={report.message}
                            updateReportStatus={this.updateReportStatus}
                        />
                    ))
                }
            </div>
        )
    }
}