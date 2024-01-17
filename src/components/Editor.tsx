import GeneralInput from "./GeneralInput"
import EducationInput from "./EducationInput"
import { Education, Work } from "../types/types"
import WorkInput from "./WorkInput"
import { MouseEventHandler } from "react"

interface EditorProps {
    handlers: {
        generalInputChange: ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined
        educationAdd: (education: Education) => void
        workAdd: (work: Work) => void
        workEdit: (work: Work) => void
        workDelete: MouseEventHandler
        workChange: MouseEventHandler
    }
}

function Editor({ handlers }: EditorProps) {
    const { generalInputChange, educationAdd, workAdd, workEdit, workChange, workDelete } = handlers;
    return (
        <div className="editor">
            <h1>CV Builder</h1>
            <GeneralInput onChange={ generalInputChange } />
            <WorkInput  onAdd={ workAdd } onEdit={ workEdit } onChange={ workChange} onDelete={ workDelete } />
            <EducationInput onAdd={ educationAdd } />
        </div>
    )
}

export default Editor