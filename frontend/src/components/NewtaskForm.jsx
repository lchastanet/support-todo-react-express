import styled from "@emotion/styled"
import { useState } from "react"
import axios from "axios"

function NewtaskForm({ setTasks }) {
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/task`, { content })
      .then((res) => {
        console.log(res.data)
        setContent("")
        setTasks((tasks) => [...tasks, res.data])
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <textarea
        onChange={(e) => setContent(e.target.value)}
        name="content"
        id="content"
        cols="30"
        rows="3"
        value={content}
      ></textarea>
      <input type="submit" value="Ajouter" />
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 3rem;

  & > textarea {
    border-radius: 15px;
    padding: 0.5rem;
    font-family: sans-serif;
  }

  & > input {
    all: unset;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 15px;
    text-align: center;
    border: solid lightblue 1px;
    background-color: lightcyan;
    cursor: pointer;
  }
`

export default NewtaskForm
