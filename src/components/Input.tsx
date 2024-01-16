export interface InputProps {
  type: string
  id: string
  onChange: ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined
}

function Input({ type, id, onChange = undefined }: InputProps) {
    const capitalisedId = id.charAt(0).toUpperCase() + id.slice(1)

  return type === 'textarea' ? (
    <div>
      <label htmlFor={id}>{capitalisedId}</label>
      <textarea id={id} name={id} onChange={onChange} />
    </div>
  ) : (
    <div>
    <label htmlFor={id}>{capitalisedId}</label>
    <input type={type} id={id} name={id} onChange={onChange} />
  </div>
  )
}

export default Input
