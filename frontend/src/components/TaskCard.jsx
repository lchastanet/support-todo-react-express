import styled from "@emotion/styled"
import axios from "axios"
import { useState } from "react"

function TaskCard({ task, isLast, setTasks }) {
  const [isDone, setIsDone] = useState(task.status)

  const handleEdit = (e) => {
    e.preventDefault()

    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/task/${task.id}`, {
        ...task,
        status: !isDone,
      })
      .then((res) => {
        console.log(res)

        setIsDone(!isDone)
      })
  }

  const handleDelete = (e) => {
    e.preventDefault()

    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/task/${task.id}`)
      .then((res) => {
        console.log(res)

        setTasks((tasks) =>
          tasks.filter((currentTask) => currentTask.id !== task.id)
        )
      })
  }

  return (
    <Container isDone={isDone} isLast={isLast}>
      <div>
        <input
          onChange={handleEdit}
          checked={isDone}
          type="checkbox"
          name="status"
          id="status"
        />
      </div>
      <p>{task.content}</p>
      <div>
        <button onClick={handleDelete}>❌</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  border-bottom: solid grey 1px;

  &:last-child {
    border-bottom: none;
  }

  & > p {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-all;
    margin: auto 0.5rem;
    text-decoration-line: ${({ isDone }) => (isDone ? `line-through` : `none`)};
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div > input {
    margin: 0.5rem;
  }

  & button {
    all: unset;
    cursor: pointer;
    padding: 0.5rem;
  }
`

export default TaskCard
