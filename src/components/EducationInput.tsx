import { useState } from 'react';
import { Education } from '../types/types';
import Input, { InputProps } from './Input'

interface EducationInputProps {
    onAdd: (education: Education) => void
}

function EducationInput({ onAdd }: EducationInputProps) {

    const initialFormState: Education = {
        school: '',
        degree: '',
        start: '',
        end: '',
    }

    const [educationForm, setEducationForm] = useState<Education>(initialFormState)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setEducationForm(prevState => ({ ...prevState, [id]: value }))
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAdd(educationForm);
        setEducationForm(initialFormState);
    }

    const inputs: InputProps[] = [
        { type: 'text', id: 'school', value:educationForm.school, onChange: handleInputChange },
        { type: 'text', id: 'degree', value:educationForm.degree, onChange: handleInputChange },
        { type: 'date', id: 'start', value:educationForm.start, onChange: handleInputChange },
        { type: 'date', id: 'end', value:educationForm.end, onChange: handleInputChange},
    ]

  return (
    <form className='inputs' onSubmit={ handleFormSubmit }>
        <h2>Education</h2>
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

export default EducationInput