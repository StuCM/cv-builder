import { Education } from "../types/types";

interface EducationPreviewProps {
    education: Education[]
}

function EducationPreview({ education }: EducationPreviewProps) {
    return (
        <>
            <h2>Education</h2>
            {education?.map((ed:Education) => (
            <div>
                <p>{ed.school}</p>
                <p>{ed.degree}</p>
                <p>{ed.start}</p>
                <p>{ed.end}</p>
            </div>
            ))}
        </>


    )
}

export default EducationPreview;