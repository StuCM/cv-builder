import GeneralInput from "./GeneralInput"
import { Education, Work } from "../types/types"
import InputController from "./InputController"
import { MouseEventHandler } from "react"

interface EditorProps {
    handlers: {
        generalInputChange: ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void)
        educationAdd: (education: Education) => void
        educationEdit: (education: Education) => void
        educationDelete: MouseEventHandler
        educationChange: (event: React.MouseEvent<HTMLButtonElement>) => Education
        workAdd: (work: Work) => void
        workEdit: (work: Work) => void
        workDelete: MouseEventHandler
        workChange: (event: React.MouseEvent<HTMLButtonElement>) => Work
    }
}

const workInputs = [
    { type: 'text', value: 'company' },
    { type: 'text', value: 'position' },
    { type: 'date', value: 'start' },
    { type: 'date', value: 'end'},
    { type: 'textarea', value: 'summary'},
]

const educationInputs = [
    { type: 'text', value: 'school' },
    { type: 'text', value: 'degree' },
    { type: 'date', value: 'start' },
    { type: 'date', value: 'end'},
]

function Editor({ handlers }: EditorProps) {
    const { generalInputChange, educationAdd, educationEdit, educationChange, educationDelete, workAdd, workEdit, workChange, workDelete } = handlers;
    return (
        <div className="editor">
            <h1>CV Builder</h1>
            <GeneralInput onChange={ generalInputChange } />
            <InputController<Work> inputValues={ workInputs } onAdd={ workAdd } onEdit={ workEdit } onChange={ workChange} onDelete={ workDelete } />
            <InputController<Education> inputValues={ educationInputs } onAdd={ educationAdd } onEdit={ educationEdit } onChange={ educationChange } onDelete={ educationDelete } />
        </div>
    )
}

export default Editor