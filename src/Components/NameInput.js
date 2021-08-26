import './NameInput.css'

const NameInput = () => {
  return ( 
    <>
      <h1>Hello!</h1>
      <div className="inputContainer">
        <h2>My name is </h2>
        <form>
          <input type="text" name="name" id="name" />
          <input type="submit" value="OK" />
        </form>
        
      </div>
    </>
   )
}
 
export default NameInput