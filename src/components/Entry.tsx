import { MouseEventHandler } from "react";

interface EntryProps {
    name: string,
    id: number,
    onDelete: MouseEventHandler<HTMLButtonElement>,
    onChange: MouseEventHandler<HTMLButtonElement>,
}

function Entry({ name, id, onChange, onDelete }: EntryProps) {
    return (
        <div className="entry" id={`${id}`}>
            <span>{ name }</span>
            <button onClick={ onChange }>edit</button>
            <button onClick={onDelete} >delete</button>
        </div>
    )
}

export default Entry;