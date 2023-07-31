import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import axios from "axios"

import TaskCard from "./components/TaskCard"
import NewtaskForm from "./components/NewtaskForm"

function App() {
  const [tasks, setTasks] = useState([])

  const lastIndex = tasks.length - 1

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/task`)
      .then((res) => setTasks(res.data))
  }, [])

  return (
    <>
      <NewtaskForm setTasks={setTasks} />
      <TasksContainer>
        {tasks.map((task, i) => (
          <TaskCard
            key={task.id}
            task={task}
            isLast={lastIndex === i}
            setTasks={setTasks}
          />
        ))}
      </TasksContainer>
    </>
  )
}

const TasksContainer = styled.div`
  width: 35%;
  border: solid gray 1px;
  border-radius: 15px;
`

export default App
