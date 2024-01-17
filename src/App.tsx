import './App.css'
import { useState } from 'react'
import { Data, Education } from './types/types'
import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {
  const [data, setData] = useState<Data>({
    general: {
      name: '',
      position: '',
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

  const handleAddEducation = (education: Education) => {
    const newEducation = [...data.education, education]
    setData({ ...data, education: newEducation })
  }

  const handleAddWork = (work: Work) => {
    const newWork = [...data.work, work];
    setData({...data, work: newWork })
  }

  return (
    <>
      <Editor generalInputChange={ handleGeneralChange } educationAdd={ handleAddEducation } workAdd= { handleAddWork } />
      <Preview {...data} />
    </>
  )
}

export default App
