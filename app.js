const express = require("express")
const userRouters = require("./routes/userRoutes")

const app = express()

app.use(express.json())
app.use(userRouters)

const port = 3000

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})