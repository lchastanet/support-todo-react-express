import models from "../models/index.js"

export const getAll = async (req, res) => {
  try {
    const [tasks] = await models.task.findAll()

    res.send(tasks)
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
}

export const addOne = async (req, res) => {
  const task = req.body

  try {
    const [result] = await models.task.insert(task)

    if (result.affectedRows) {
      res.status(201).send({ ...task, id: result.insertId, status: false })
    } else {
      res.sendStatus(400)
    }
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
}

export const editOne = async (req, res) => {
  const task = req.body
  const { id } = req.params

  try {
    const [result] = await models.task.edit({ ...task, id })

    console.log(result)

    if (result.affectedRows) {
      res.status(200).send({ ...task, id })
    } else {
      res.sendStatus(400)
    }
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
}

export const deleteOne = async (req, res) => {
  const { id } = req.params

  try {
    const [result] = await models.task.delete(id)

    if (result.affectedRows) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
}
