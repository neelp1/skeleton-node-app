const express = require('express')
const app = express()

app.use(
  '/healthcheck',
  require('express-healthcheck')({
    healthy: function() {
      return { everything: 'is ok!' }
    },
  }),
)
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
