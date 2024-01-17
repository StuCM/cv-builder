import { Education } from "../types/types";

interface EducationPreviewProps {
    education: Education[]
}

function EducationPreview({ education }: EducationPreviewProps) {
    const convertDate = (date:string) => {
        return new Date(date).toLocaleString('en-GB', { month: 'short', year: 'numeric' })
    }
    return (
        <>
            <h2>Education</h2>
            {education?.map((ed:Education) => (
            <div>
                <p>{ed.school}</p>
                <p>{ed.degree}</p>
                <p>{convertDate(ed.start)}</p>
                <p>{convertDate(ed.end)}</p>
            </div>
            ))}
        </>


    )
}

export default EducationPreview;