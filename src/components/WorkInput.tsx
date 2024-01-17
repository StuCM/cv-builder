import { useState } from 'react';
import { Work } from '../types/types';
import Input, { InputProps } from './Input'

interface WorkInputProps {
    onAdd: (work: Work) => void
}

function WorkInput({ onAdd }: WorkInputProps) {
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setWorkForm(prevState => ({ ...prevState, [id]: value }))
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setId(id + 1);
        onAdd({ ...workForm, id: id });
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
    <form className='inputs' onSubmit={ handleFormSubmit }>
        <h2>Experience</h2>
        <hr />
      {inputs.map((input) => (
        <Input key={input.id} {...input} />
      ))}
      <aside style={{textAlign:'right'}}>
        <button type='submit'>+</button>
      </aside>
      
    </form>
  )
}

export default WorkInput;