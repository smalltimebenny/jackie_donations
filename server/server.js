const express = require("express")
const app = express()
const PORT =8000

const cors =require("cors")
app.use(cors())

const JackieRoutes = require ("./routes/jackie.routes.js")

JackieRoutes(app)

app.listen(PORT, ()=> console.log(`The server is ready on port ${PORT}`))