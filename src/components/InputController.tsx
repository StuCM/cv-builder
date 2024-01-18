import { MouseEventHandler, useState } from 'react'
import { Entry } from '../types/types'
import Input, { InputProps } from './Input'
import EntryComp from './Entry'

interface InputValues {
  type: string
  value: string
}

type Generic = { [key: string]: any }
interface WorkInputProps<T extends Generic> {
  inputValues: InputValues[]
  onAdd: (item: T) => void
  onEdit: (item: T) => void
  onChange: (event: React.MouseEvent<HTMLButtonElement>) => T
  onDelete: MouseEventHandler<HTMLButtonElement>
}

function WorkInput<T extends Generic>({
  inputValues,
  onAdd,
  onEdit,
  onChange,
  onDelete,
}: WorkInputProps<T>) {
  const [id, setId] = useState<number>(0)

  const initialFormState: T = inputValues.reduce(
    (obj, input) => {
      obj[input.value] = ''
      return obj
    },
    { id: 0 } as any
  ) as T

  const [form, setForm] = useState<T>(initialFormState)
  const [entries, setEntries] = useState<Entry[]>([])
  const [inEdit, setInEdit] = useState<boolean>(false)

  //handles for the entry component
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const updatedInput = onChange(e)
    if (!updatedInput) return
    setInEdit(true)
    setForm(updatedInput)
  }

  const deleteEntry = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.closest('div')?.id
    setEntries(entries.filter((entry) => entry.id !== parseInt(id!)))
    onDelete(e)
  }

  //handles for the input components
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setForm((prevState) => ({ ...prevState, [id]: value }))
  }

  const cancelEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setForm(initialFormState)
    setInEdit(false)
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inEdit) {
      onEdit(form)
      setInEdit(false)
    } else {
      setId(id + 1)
      onAdd({ ...form, id: id })
      setEntries([...entries, { name: form.company, id: id }])
    }
    setForm(initialFormState)
  }

  const inputs: InputProps[] = inputValues.map((input) => ({
    type: input.type,
    id: input.value,
    value: form[input.value],
    onChange: handleInputChange,
  }))

  const heading = inputValues[0].value === 'company' ? 'Work Experience' : 'Education'

  return (
    <>
      {entries.map((entry) => (
        <EntryComp
          key={entry.id}
          name={entry.name}
          id={entry.id}
          onChange={handleEdit}
          onDelete={deleteEntry}
        />
      ))}
      <form className='inputs' onSubmit={handleFormSubmit}>
        <h2>{ heading }</h2>
        <hr />
        {inputs.map((input) => (
          <Input key={input.id} {...input} />
        ))}
        {inEdit ? (
          <aside style={{ textAlign: 'right' }}>
            <button type='button' onClick={cancelEdit}>
              Cancel
            </button>
            <button type='submit'>Save</button>
          </aside>
        ) : (
          <aside style={{ textAlign: 'right' }}>
            <button type='submit'>+</button>
          </aside>
        )}
      </form>
    </>
  )
}

export default WorkInput
