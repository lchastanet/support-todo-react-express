import express from "express"

import taskRoutes from "./routes/task.route.js"

const app = express()

app.use("/task", taskRoutes)

app.get("*", (req, res) => res.sendStatus(404))

export default app
