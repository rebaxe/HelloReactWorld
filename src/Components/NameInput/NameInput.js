import { useEffect, useState } from 'react'
import './NameInput.css'

const NameInput = (props) => {
  const { handleSetSubmitted } = props
  const [name, setName] = useState('')
  const [btnValue, setBtnValue] = useState('✖')

  // Set name to input text.
  const handleInput = (e) => {
    setName(e.target.value)
  }

  // Submit the name.
  const handleSubmit = (e) => {
    e.preventDefault()
    handleSetSubmitted(name.trim())
  }

  // Dynamically change the value of the submit button.
  useEffect(() => {
    !name || !name.trim() ? setBtnValue('✖') : setBtnValue('➜')
  }, [name])

  return ( 
    <>
      <h1 id="hello">Hello!</h1>
      <div className="inputContainer">
        <h2>My name is </h2>
        <form autoComplete="off" onSubmit={(e) => {handleSubmit(e)}}>
          <input type="text" name="name" id="name" value={name} onChange={(e) => {handleInput(e)}}/>
          <input type="submit" value={btnValue} id="submitBtn" disabled={ !name || !name.trim() }/>
        </form>
      </div>
    </>
   )
}
 
export default NameInput