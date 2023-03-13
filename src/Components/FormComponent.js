import React from 'react'
import { useState } from 'react'

export default function FormComponent() {
  const [pas,setPas]=useState("password")
  const [sub,setSub]=useState({
    name:"",
    surname:"",
    address:"",
    tel:"",
    email: "",
    password:""
  })
  function nameCh(e){
    const { name, value } = e.target;
    // setSub({
    //   (previusState)
    // })
    setSub((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
        id: Math.random()
      }
    });
  }
  
function pasButton(e){
  e.preventDefault()
  setPas(pas=="password"?"text":"password") 
}
function subButton(e){
  e.preventDefault()
  // alert("Send")
  console.log('state : ', sub)
  setSub({
    name:"",
    surname:"",
    address:"",
    tel:"",
    email: "",
    password:""
  })
}

  return (
    <div>
       <h1>Form data</h1>
       <form>
        <div>
         <input value={sub.name} name='name' onChange={nameCh} type={'text'}></input> : Name
        </div>
        <div>
          <input value={sub.surname} onChange={nameCh}  name='surname' type={"text"}></input> : Surname
        </div>
        <div>
          <input value={sub.address} onChange={nameCh} name='address' type={"text"}></input> : Adress
        </div>
        <div>
          <input value={sub.tel} onChange={nameCh} name='tel' type={'number'}></input> : Tel
        </div>
        <div>
          <input value={sub.email} onChange={nameCh} name='email' type={"email"}></input> : Email
        </div>
        <div>
          <input value={sub.password} onChange={nameCh} name='password' type={pas}></input><button onClick={pasButton}>Show password</button>
        </div>
        <button type='submit' onClick={subButton}>SUBMIT</button>
       </form>
    </div>
  )
}
