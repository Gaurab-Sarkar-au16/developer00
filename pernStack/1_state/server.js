const express = require('express')
const stateRoutes = require('./src/state/routes')

const app = express()
const port = 3000

app.use(express.json())

app.use('/api/v1/states', stateRoutes)

app.use('*', (req,res) => {
    res.status(404).json({
        message: "This address is not available"
    })
})

app.listen(port, ()=>{
    console.log(`Server started, listening in port ${port}`)
})