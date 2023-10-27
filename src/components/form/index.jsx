import { useState } from "react"

export default function FormInputText({setTasks}) {

    const [text, setText] = useState("")

    const handleChange = (e) =>{
      setText(e.target.value)
    }

    const handleAdd = () =>{
      if(text.trim())
        setTasks(tasks => [...tasks, {id: Date.now(), title: text, checked: false}])
      setText("")
    }

    const enterSubmit = (event) =>{
      const keycode = event.which;
      if(keycode == 13){
        handleAdd()
      }
    }

    return (
      <div className="form">
        <input id="inputText" onKeyDown={enterSubmit} type="text" value={text} onChange={handleChange} placeholder="Type your new task here."/>
        <span onClick={handleAdd} id="plusBtn"><p>+</p></span>
      </div>
    )
  }