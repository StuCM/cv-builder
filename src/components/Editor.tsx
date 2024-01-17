import GeneralInput from "./GeneralInput"
import EducationInput from "./EducationInput"
import { Education, Work } from "../types/types"
import WorkInput from "./WorkInput"

interface EditorProps {
    generalInputChange: ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined
    educationAdd: (education: Education) => void
    workAdd: (work: Work) => void
}

function Editor({ generalInputChange, educationAdd, workAdd }: EditorProps) {
    return (
        <div className="editor">
            <h1>CV Builder</h1>
            <GeneralInput onChange={ generalInputChange } />
            <WorkInput  onAdd={ workAdd } />
            <EducationInput onAdd={ educationAdd } />
        </div>
    )
}

export default Editor