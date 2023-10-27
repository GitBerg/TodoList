import { FaTrashAlt } from "react-icons/fa";

export default function Task(props) {

  const handleCheck = () =>{
    props.setTasks(tasks => {
    const newArr = tasks.map(el => el.id === props.task.id? { ...el, checked: !el.checked } : el)
    return newArr
    })
  }

  const handleDelete = () => {
    props.setTasks(tasks => {
      const newTasks = tasks.filter(el => el.id !== props.task.id)
      return newTasks
    })
  }

  return (
    <div className="task">
      <div className="task-check" onClick={handleCheck}>
        <p className={props.task.checked?'task-checked':''}>{props.task.title}</p>
      </div>
      <span onClick={handleDelete} className="trash-btn">
        <FaTrashAlt/>
      </span>
    </div>
  )
}