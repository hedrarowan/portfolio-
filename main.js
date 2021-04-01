'use strict'


const app = require('./server')

app.listen(process.env.PORT || 1337, () => console.log(`studiously serving silly sounds on port 1337`))

