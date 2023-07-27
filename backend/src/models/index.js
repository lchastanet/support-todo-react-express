import TaskManager from "./TaskManager.js"
import db from "./db.js"

const models = {}

models.task = new TaskManager()
models.task.setDatabase(db)

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop]
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1)

    throw new ReferenceError(`
        model.${prop} is not defined, Did you create ${pascalize(
      prop
    )}Manager.js, and did you register it in backend/src/models/index.js?
      `)
  },
}

export default new Proxy(models, handler)
