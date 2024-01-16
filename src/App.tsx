import './App.css'
import { useState } from 'react'
import { Data } from './types/types'
import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {
  const [data, setData] = useState<Data>({
    general: {
      name: '',
      email: '',
      phone: '',
      description: '',
    },
    education: [],
    work: [],
  })

  const handleGeneralChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    const general = { ...data.general, [id]: value }
    setData({ ...data, general })
  }

  return (
    <>
      <Editor generalInputChange={ handleGeneralChange } />
      <Preview {...data} />
    </>
  )
}

export default App
