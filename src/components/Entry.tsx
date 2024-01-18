import { MouseEventHandler } from "react";
import { FaTrash, FaPen } from "react-icons/fa";

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
            <span style={{display: 'flex'}}>
                <button className='iconButton' onClick={ onChange }><FaPen /></button>
                <button className='iconButton' onClick={onDelete} ><FaTrash /></button>
            </span>
            
        </div>
    )
}

export default Entry;