import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header"
import About from "./components/About"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Footer from './components/Footer'
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


  useEffect( () => {
    
    axios.get(`http://localhost:5000/tasks`).then(response => setTasks(response.data))

  }, [])


  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id  !== id))
  }

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={ () => setShowAddTask(!showAddTask) } showAdd={showAddTask} />
        
        <Route path="/" exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {
              tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show' 
            }
          </>
        )} />
        <Route path='/about' exact component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;