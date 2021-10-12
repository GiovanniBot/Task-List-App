import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import AddTask from "./Components/AddTask"
import { useState } from "react"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
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

  // Convert tasks to JSON format
  // const taskJSON = JSON.stringify(tasks);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id 
        ? { ...task, reminder: !task.reminder } 
        : task
      )
    )
  }

  return (
    <div className='container'>
      <Header title='Taskou!' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("You currently don't have any task.")}
    </div>
  )
}

export default App

// Array.prototype.map2 = function(callback) {
//   const newArray = []
//   for(let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i], i, this))
//   }
//   return newArray
// }