const express = require('express')
const app = express()
const port = 3000
app.use(express.static('song'))
app.get('/', (req, res) => {
  res.send('Hello World1!')
})
app.get('/ho', (req, res) => {
  res.send('home')
})
app.get('/about', (req, res) => {
  console.log(req);
  
  res.send('about')
})
// app.get('/blog/:slug/:se', (req, res) => {
//   res.send(`Hello ${req.params.slug} and ${req.params.se}`)
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      