import React from 'react'
import Input, { InputProps } from './Input'

interface GeneralInputProps {
    onChange: ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined
}

function GeneralInput({ onChange }: GeneralInputProps) {
  const inputs: InputProps[] = [
    { type: 'text', id: 'name', onChange },
    { type: 'email', id: 'email', onChange },
    { type: 'tel', id: 'phone', onChange },
    { type: 'textarea', id: 'description', onChange },
  ]

  return (
    <div className='inputs'>
        <h2>General Info</h2>
      {inputs.map((input) => (
        <Input key={input.id} {...input} />
      ))}
    </div>
  )
}

export default GeneralInput
