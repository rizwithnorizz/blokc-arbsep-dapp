import { useState } from 'react'
import './App.css'

import Button from './components/Button/Button'
import TextField from './components/TextField/Textfield'

import { send } from "../scripts/deploy";

function App() {
  const [sender, setSender] = useState("")
  const [receiver, setReceiver] = useState("")
  const [amount, setAmount] = useState("")

  const handleChangeSender = (value: string) =>{
    setSender(value);
  }
  const handleChangeReceiver = (value: string) =>{
    setReceiver(value);
  }
  const handleChangeAmount = (value: string) =>{
    setAmount(value);
  }
  const sendHandler= () =>{
    send(sender, receiver, amount);
  }

  return (
    <>
      <div className="card">
        <TextField value = {sender} onChange={handleChangeSender} placeholder ='Sender'/>
        <TextField value = {receiver} onChange={handleChangeReceiver} placeholder ='Receiver'/>
        <TextField value = {amount} onChange={handleChangeAmount} placeholder ='Amount'/>
        <Button label = "Send Token" onClick = {sendHandler}/>
      </div>
    </>
  )
}

export default App
