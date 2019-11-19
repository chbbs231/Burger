const{burgers: {getburgers,addburger,eatburger,removeburger}} = require ('../controllers')

module.exports = app =>{
    //GET all burgers
        app.get('/burgers', (req, res) => {
            burgers.getburgers( burgers => {
                res.json(burgers)
            })
        })
    //POST one burger
        app.post('/burgers', (req, res) => {
            addburger(req.body.burger_name, req.body.devoured, () =>{
                res.sendStatus(200)
            })
    })
    //PUT one burger
        app.put('/burgers/:id', (req, res) => {
            eatburger(parseInt(res.params.id), () =>{
                res.sendStatus(200)
            })
    })
    //DELETE one burger        
        app.delete('/burgers/:id',(req, res) => {
            removeburger(parseInt(req.params.id), () =>{
                res.sendStatus(200)
            })
    })
}