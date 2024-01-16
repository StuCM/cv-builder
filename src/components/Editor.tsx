import GeneralInput from "./GeneralInput"

interface EditorProps {
    generalInputChange: ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined
}

function Editor({ generalInputChange }: EditorProps) {
    return (
        <div className="editor">
            <h1>CV Builder</h1>
            <GeneralInput onChange={ generalInputChange } />

        </div>
    )
}

export default Editor