const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

app.get("/",function(req,res){
    res.send("siema")
})
app.get("/im/:imie/:nazwisko",function(req,res){
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    console.log(`Imie: ${imie} Nazwisko: ${nazwisko}`)
    res.send("git")
})
app.listen(port)