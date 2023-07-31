import express from "express"
import cors from "cors"

import taskRoutes from "./routes/task.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/task", taskRoutes)

app.get("*", (req, res) => res.sendStatus(404))

export default app
