import { Work } from "../types/types";

interface WorkPreviewProps {
    work: Work[]
}

function WorkPreview({ work }: WorkPreviewProps) {
    const convertDate = (date:string) => {
        return new Date(date).toLocaleString('en-GB', { month: 'short', year: 'numeric' })
    }
    return (
        <>
            <h2>Experience</h2>
            {work?.map((job:Work) => (
            <div key={job.id}>
                <div className="itemHeader">
                    <div>
                        <h3>{job.position} <span> - {job.company}</span></h3>
                        
                    </div>
                    <div className="dates">
                        <span>{convertDate(job.start)} - {convertDate(job.end)}</span>
                    </div>
                </div>
                <p>{job.summary}</p>
            </div>
            ))}
        </>


    )
}

export default WorkPreview;