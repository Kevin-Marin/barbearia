const express = require("express")
const cep_endereco = require("./middlewares/cep_endereco.js")
const cliente_controller = require("./controllers/cliente.js")
const barbeiro_controller = require("./controllers/barbeiro.js")
const barbearia_controller = require("./controllers/barbearia.js")
const app = express()
const port = 5000

app.use(express.json())
// app.use(cep_endereco) // Midleware de uso global

app.post("/barbearia", cep_endereco, (req, res) => {
    res.json(req.body)
})

app.get("/cliente", (req, res) => {
    res.json(cliente_controller.index())
})

app.get("/cliente/:id", (req, res) => {
    res.json(cliente_controller.show(req.params.id))
})

app.post("/cliente", (req, res) => {
    const code = cliente_controller.store(req.body)
    res.status(code).json()
})

app.put("/cliente/:id", (req, res) => {
    const code = cliente_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/cliente/:id", (req, res) => {
    cliente_controller.destroy(req.params.id)
    res.json()
})

// barbeiro

app.get("/barbearia", (req, res) => {
    res.json(barbeiro_controller.index())
})

app.get("/barbearia/:id", (req, res) => {
    res.json(barbeiro_controller.show(req.params.id))
})

app.post("/barbearia", cep_endereco, (req, res) => {
    const code = barbeiro_controller.store(req.body)
    res.status(code).json()
})

app.put("/barbearia/:id", (req, res) => {
    const code = barbeiro_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/barbearia/:id", (req, res) => {
    barbeiro_controller.destroy(req.params.id)
    res.json()
})

//barbearia









app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})









