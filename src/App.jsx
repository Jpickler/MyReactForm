import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> My React Form</h1>
      <SignUpForm />
      <Authenticate />
    </>
  )
}

export default App
