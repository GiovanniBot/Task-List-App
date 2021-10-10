import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import { useState } from "react"

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Estudar .NET',
        day: 'Out 12 às 18:00',
        reminder: true,
    },
    {
        id: 2,
        text: 'Estudar React',
        day: 'Out 12 às 08:00',
        reminder: true,
    },
    {
        id: 3,
        text: 'Estudar Git',
        day: 'Out 12 às 12:00',
        reminder: false,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header title='Taskou' />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : "You currently don't have any task."}
    </div>
  )
}

export default App