import './App.css'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import { Data, Education, Work } from './types/types'
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

  useEffect(() => {
    console.log(data.work)
  }, [data.work])

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

  const handleEditEducation = (education: Education) => {
    const index = data.education.findIndex((e) => e.id === education.id);
    const newEducation = [...data.education];
    newEducation[index] = education;
    setData({...data, education: newEducation });
 }

 const handleChangeEducation = (event: React.MouseEvent<HTMLElement>) => {
   const id: string | undefined = event.currentTarget.closest('div')?.id;
   if(!id) return;
   const parsedId = parseInt(id);
   return data.education.find((e) => e.id === parsedId);
 }

 const handleDeleteEducation: MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => {
   const id: string | undefined = event.currentTarget.closest('div')?.id;
   if(!id) return;
   const parsedId = parseInt(id);
   const newWork = data.education.filter((w) => w.id !== parsedId);
   setData({...data, education: newWork });
 }

  const handleAddWork = (work: Work) => {
    const newWork = [...data.work, work];
    setData({...data, work: newWork })
  }

  const handleEditWork = (work: Work) => {
     const index = data.work.findIndex((w) => w.id === work.id);
     const newWork = [...data.work];
     newWork[index] = work;
     setData({...data, work: newWork });
  }

  const handleChangeWork = (event: React.MouseEvent<HTMLElement>) => {
    const id: string | undefined = event.currentTarget.closest('div')?.id;
    if(!id) return;
    const parsedId = parseInt(id);
    return data.work.find((w) => w.id === parsedId);
  }

  const handleDeleteWork: MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => {
    const id: string | undefined = event.currentTarget.closest('div')?.id;
    if(!id) return;
    const parsedId = parseInt(id);
    const newWork = data.work.filter((w) => w.id !== parsedId);
    setData({...data, work: newWork });
  }

  const handlers = {
    generalInputChange: handleGeneralChange,
    educationAdd: handleAddEducation,
    educationEdit: handleEditEducation,
    educationChange: handleChangeEducation,
    educationDelete: handleDeleteEducation,
    workAdd: handleAddWork,
    workEdit: handleEditWork,
    workChange: handleChangeWork,
    workDelete: handleDeleteWork,
  }

  return (
    <>
      <Editor handlers={ handlers } />
      <Preview {...data} />
    </>
  )
}

export default App
