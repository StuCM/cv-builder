export interface InputProps {
  type: string
  id: string
  value?: string 
  onChange?: ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void)
}

function Input({ type, id, value, onChange }: InputProps) {
    const capitalisedId = id.charAt(0).toUpperCase() + id.slice(1)

  return type === 'textarea' ? (
    <div>
      <label htmlFor={id}>{capitalisedId}</label>
      <textarea id={id} name={id} value={value} onChange={onChange} />
    </div>
  ) : (
    <div>
    <label htmlFor={id}>{capitalisedId}</label>
    <input type={type} id={id} name={id} value={value} onChange={onChange} />
  </div>
  )
}

export default Input
