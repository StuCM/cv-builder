import GeneralInput from "./GeneralInput"
import EducationInput from "./EducationInput"
import { Education } from "../types/types"

interface EditorProps {
    generalInputChange: ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined
    educationAdd: (education: Education) => void
}

function Editor({ generalInputChange, educationAdd }: EditorProps) {
    return (
        <div className="editor">
            <h1>CV Builder</h1>
            <GeneralInput onChange={ generalInputChange } />
            <EducationInput onAdd={ educationAdd } />
        </div>
    )
}

export default Editor