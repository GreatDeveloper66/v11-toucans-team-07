import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

/*constants*/
const app = express()
const port = process.env.PORT

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`)
})

app.use('/', express.static(process.cwd()));




