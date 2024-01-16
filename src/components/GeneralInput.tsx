import Input, { InputProps } from './Input'

function GeneralInput() {
  const inputs: InputProps[] = [
    { type: 'text', id: 'name', onChange: undefined },
    { type: 'email', id: 'email', onChange: undefined },
    { type: 'tel', id: 'phone', onChange: undefined },
    { type: 'textarea', id: 'description', onChange: undefined },
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
