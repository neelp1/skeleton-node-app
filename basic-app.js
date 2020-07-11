const express = require('express')
const app = express()

const fetch = require('node-fetch');

function sayHello(){
  return "hello";
}

// const colourResultAsync = async () => {
//   const response = await p('https://ethanent.me')
//   return response.body
// }
//
// const colourFunction = async () => {
//   const result = await colourResultAsync()
//   return result
// }

app.use(
  '/healthcheck',
  require('express-healthcheck')({
    healthy: function() {
      return { everything: 'is ok!' }
    },
  }),
)
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/test/:test', function (req, res) {
  res.send(req.params['test'])
})

app.get('/api/pets/:species', function (req, res) {
  // res.send('localhost:3001/api/' + req.params['colour'])
  // res.send(sayHello())
  // (async() => {
  //   console.log(await colourFunction())
  // })()
  fetch('https://github.com/')
    .then(res => res.text())
    .then(body => console.log(body));
})

// app.get('/api/accessories/:thing', function (req, res) {
//   res.send('localhost:3002/api/')
// })

app.listen(3000, () => console.log('Example app listening on port 3000!'))
