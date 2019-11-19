const express = require('express')
const { join } = require ('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs'}))
app.set('view engie', '.hbs')

require('./routes')(app)


app.listen(3002)