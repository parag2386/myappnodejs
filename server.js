const express = require('express')
const app = express()
const port = process.env.PORT || 5080

app.get('/', (req, res) => res.send('Hello World Parag !!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
