import { useState } from 'react'
import './App.css';

function Form() {
  const [name, setName] = useState("")
  const [tnc, setTnc] = useState(false)
  const [int, setInt] = useState("")
  const [nErr,setnErr]=useState(false)
  function getData(e) {
    console.log(name,tnc,int)
    e.preventDefault()
  }

  function userHandler(e){
    let item=e.target.value
    item.length<5?setnErr(true):setnErr(false)
  }
  return (
    <div className="Form">
      <form onSubmit={getData}>
        <input type="text" placeholder='Enter Your Name' onChange={userHandler}></input>{nErr?<span>Name not valid</span>:""}<br /><br />
        <select onChange={(e) =>setInt(e.target.value)}>
          <option>Selection</option>
          <option>Marvel</option>
          <option>DC</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept Term And Condition</span><br /><br />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default Form;
