import "dotenv/config"

import app from "./src/app.js"

const port = process.env.APP_PORT ?? "8080"

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Servier is running on port ${port}`)
  }
})
