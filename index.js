const express = require('express')
const app = express()
const port = 3000
const recefiCard = require('./data/recefiCard.json')
app.get('/', (req, res) => {
  res.send(recefiCard)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})