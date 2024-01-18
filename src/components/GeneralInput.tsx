import React from 'react'
import Input, { InputProps } from './Input'
import { General } from '../types/types'

interface GeneralInputProps {
    onChange: ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined
    data: General
}

function GeneralInput({ onChange, data }: GeneralInputProps) {
  const inputs: InputProps[] = [
    { type: 'text', id: 'name', value: data.name, onChange },
    { type: 'text', id: 'position', value: data.position, onChange },
    { type: 'email', id: 'email', value: data.email, onChange },
    { type: 'tel', id: 'phone', value: data.phone, onChange },
    { type: 'textarea', id: 'description', value: data.description, onChange },
  ]

  return (
    <div className='inputs'>
        <h2>General Info</h2>
        <hr />
      {inputs.map((input) => (
        <Input key={input.id} {...input} />
      ))}
    </div>
  )
}

export default GeneralInput
