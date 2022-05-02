// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//HTTP methods
app.get('/v1/explorers', (req, res) =>{
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorers1 = {id: 1, name: "Ricardo1"}
    const explorers2 = {id: 2, name: "Ricardo2"}
    const explorers3 = {id: 3, name: "Ricardo3"}
    const explorers4 = {id: 4, name: "Ricardo4"}
    const explorers = [explorers1, explorers2, explorers3, explorers4]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) =>{
    console.log(`Api Explorers GET requests ${new Date()}`)
    console.log(`Getting Explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Ricardo1"}
    res.status(200).json(explorer)
})

app.get('/v1/explorers', (req, res) =>{
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body //parametros de un cliente
    res.status(201).json({message: "Created"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})