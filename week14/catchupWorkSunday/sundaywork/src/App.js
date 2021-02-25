import Header from './components/Header'
import './index.css'
import Tasks from './components/Tasks'
import {useState} from 'react'


const App = () =>{
  const [tasks, setTasks] = useState(
  [
    {
        id:0,
        text:"hey",
        reminder: false
    },
    {
        id:1,
        text:"looo",
        reminder: false
    }
])
  const name = "Matthew"
  const x = true

  return (
    <div className="container">
      <Header  />
      <Tasks tasks={tasks}/>
    </div>
  
  );
}

export default App;
