import models from "../models/index.js"

export const getAll = async (req, res) => {
  try {
    const [tasks] = await models.task.findAll()

    console.log(tasks)
    res.send(tasks)
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
}
