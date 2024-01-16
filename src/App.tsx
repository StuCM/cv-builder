import './App.css'
import { useState } from 'react'
import { Data } from './types/types'
import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {
  const [data, setData] = useState({} as Data)
  return (
    <>
      <Editor />
      <Preview />
    </>
  )
}

export default App
