import express from "express"

import {
  getAll,
  addOne,
  editOne,
  deleteOne,
} from "../controllers/task.controller.js"

const router = express.Router()

router.get("/", getAll)
router.post("/", addOne)
router.put("/:id", editOne)
router.delete("/:id", deleteOne)

export default router
