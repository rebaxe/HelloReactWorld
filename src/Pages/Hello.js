import { useState } from 'react'
import Greeting from '../Components/Greeting'
import NameInput from '../Components/NameInput'
import './Hello.css'

const Hello = () => {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState('')

  const handleSetSubmitted = (name) => {
    setName(name)
    setIsSubmitted(true)
  }
  return ( 
    <div className="container">
      {isSubmitted ? <Greeting name={name} /> : <NameInput handleSetSubmitted={handleSetSubmitted}/>}
    </div>
   )
}
 
export default Hello