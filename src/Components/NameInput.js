import { useState } from 'react'
import './NameInput.css'

const NameInput = (props) => {

  const { handleSetSubmitted } = props

  const [name, setName] = useState('')

  const handleInput = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSetSubmitted(name)
  }

  return ( 
    <>
      <h1>Hello!</h1>
      <div className="inputContainer">
        <h2>My name is </h2>
        <form autoComplete="off" onSubmit={(e) => {handleSubmit(e)}}>
          <input type="text" name="name" id="name" value={name} onChange={(e) => {handleInput(e)}}/>
          <input type="submit" value="OK" id="submitBtn"/>
        </form>
      </div>
    </>
   )
}
 
export default NameInput