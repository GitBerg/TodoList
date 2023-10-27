import '@/styles/globals.css'
import Task from '../components/task'
import FormInputText from '../components/form'
import { useEffect, useState } from 'react'

export default function App() {

  const [tasks, setTasks] = useState([])


  useEffect(() => {
    setTasks(tasks)
  }, [tasks])

  return (
    <div className='home'>
      <h1 className='title'>todo</h1>
      <FormInputText setTasks={setTasks} />
      <ul className='list-tasks'>
        {tasks.map((el, index) => {
          return (
            <li key={index}><Task task={el} setTasks={setTasks} /></li>
          )
        })}
      </ul>
    </div>
  )
}
