import AbstractManager from "./AbstractManager.js"

class TaskManager extends AbstractManager {
  constructor() {
    super({ table: "task" })
  }

  insert({ content }) {
    return this.database.query(
      `insert into ${this.table} (content) values(?)`,
      [content]
    )
  }

  edit({ content, status, id }) {
    return this.database.query(
      `update ${this.table} set content = ?, status = ? where  id = ?`,
      [content, status, id]
    )
  }
}

export default TaskManager
