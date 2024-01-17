import { MouseEventHandler, useState } from 'react';
import { Work, Entry } from '../types/types';
import Input, { InputProps } from './Input'
import EntryComp from './Entry';

interface WorkInputProps {
    onAdd: (work: Work) => void
    onEdit: (work: Work) => void
    onChange: (event: React.MouseEvent<HTMLButtonElement>) => Work
    onDelete: MouseEventHandler<HTMLButtonElement>
}

function WorkInput({ onAdd, onEdit, onChange, onDelete }: WorkInputProps) {
    const [id, setId] = useState<number>(0);

    const initialFormState: Work = {
        id: 0,
        company: '',
        position: '',
        start: '',
        end: '',
        summary: '',
    }

    const [workForm, setWorkForm] = useState<Work>(initialFormState)
    const [entries, setEntries] = useState<Entry[]>([])
    const [inEdit, setInEdit] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setWorkForm(prevState => ({ ...prevState, [id]: value }))
    }

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        const updatedWork = onChange(e);
        if(!updatedWork) return;
        setInEdit(true);
        setWorkForm(updatedWork);
    }

    const deleteEntry = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id = e.currentTarget.closest('div')?.id;
        setEntries(entries.filter((entry) => entry.id !== parseInt(id!)));
        onDelete(e);
    }

    const cancelEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setWorkForm(initialFormState);
        setInEdit(false);
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(inEdit) {
            onEdit(workForm);
            setInEdit(false);
        } else {
            setId(id + 1);
            onAdd({ ...workForm, id: id });
            setEntries([...entries, { name: workForm.company, id: id }]);
        }
        setWorkForm(initialFormState);
    }

    const inputs: InputProps[] = [
        { type: 'text', id: 'company', value:workForm.company, onChange: handleInputChange },
        { type: 'text', id: 'position', value:workForm.position, onChange: handleInputChange },
        { type: 'date', id: 'start', value:workForm.start, onChange: handleInputChange },
        { type: 'date', id: 'end', value:workForm.end, onChange: handleInputChange},
        { type: 'textarea', id: 'summary', value:workForm.summary, onChange: handleInputChange},
    ]

  return (
    <>
    {entries.map((entry) => (
        <EntryComp key={entry.id} name={entry.name} id={entry.id} onChange={ handleEdit } onDelete={ deleteEntry } />
    ))}
    <form className='inputs' onSubmit={ handleFormSubmit }>
        <h2>Experience</h2>
        <hr />
      {inputs.map((input) => (
        <Input key={input.id} {...input} />
      ))}
      {inEdit ? 
      <aside style={{textAlign:'right'}}>
        <button type='button' onClick={cancelEdit}>Cancel</button>
        <button type='submit'>Save</button>
      </aside> : 
      <aside style={{textAlign:'right'}}>
        <button type='submit'>+</button>
      </aside>
    }
    </form>
    </>
  )
}

export default WorkInput;