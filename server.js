const express = require('express')
const { join } = require ('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engie', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


require('./routes')(app)


app.listen(3002)