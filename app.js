const express = require('express')
const app = express();
app.get('/', (req, res) => {
 res.send('<h1>Library System</h1>')
})
app.listen(3000, () => {
 console.log('The library app is listening on port 3000!')
})