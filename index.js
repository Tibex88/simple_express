const express = require('express')
const port = 3000
const geneJson = require('./data/genelz.json')
const ldJson = require('./data/ld.json')
const recombJson = require('./data/recomb.json')
const assocJson = require('./data/assoclz.json')

const cors = require('cors');

const app = express();
app.use(cors());

app.get('/gene/*', (req, res) => {
  console.log({gene:req.query})
  res.json(geneJson)
})

app.get('/ld/*', (req, res) => {
  console.log({ld:req.query})
  res.json(ldJson)
})

app.get('/recomb/*', (req, res) => {
  console.log({recomb:req.query})
  res.json(recombJson)
})

app.get('/single/*', (req, res) => {
  console.log({assoc:req.query})
  res.json(assocJson)
})

app.get('*', (req, res) => {
  console.log({all:req.query})
  res.json({})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})