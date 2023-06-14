import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import fetch from 'node-fetch'

/*constants*/
const app = express()
const port = process.env.PORT
//const __dirname = process.cwd();



/*set up server*/

//app.use(express.static('public'))



app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`)
})
/*
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
*/

app.use('/', express.static(process.cwd()));

/*app.get('/', (req,res) => res.json("App is deployed"))*/



