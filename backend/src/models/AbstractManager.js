class AbstractManager {
  constructor({ table }) {
    this.table = table
  }

  find(id) {
    return this.database.query(`select * from ${this.table} where id = ?`, [id])
  }

  findAll() {
    return this.database.query(`select * from ${this.table}`)
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id])
  }

  setDatabase(db) {
    this.database = db
  }
}

export default AbstractManager
