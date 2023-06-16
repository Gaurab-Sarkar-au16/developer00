const express = require('express')
const studentRoutes = require('./src/student/routes')

const app = express()
const port = 3000

app.use(express.json())

app.use('/api/v1/students', studentRoutes)

app.use('*', (req,res) => {
    res.status(404).json({
        message: "This address is not available"
    })
})

app.listen(port, ()=>{
    console.log(`Server started, listening in port ${port}`)
})