const db = require ('../config')

module.exports = {
    
    getburgers (cb){
        db.query('SELECT * FROM burgers', (e, burgers) => {
            if (e){
                console.log(e)
            }
        cb(burgers)
        })
    },

    addburger (burger_name, devoured,cb){
        db.query(`INSERT INTO burgers (burger_name, devoured) VALUES ("${burger_name}", "${devoured}")`, e => {

        })
        cb()
    },

    eatburger(id,cb){
        db.query(`UPDATE burgers SET devoured = true WHERE id = ${id}`, e => {
            if (e) {
                console.log(e)
            }
        })
        cb()

    }, 

    removeburger(id, cb){
        db.query(`DELETE FROM burgers WHERE id = ${id}`, e =>{
            if (e ){
                console.log(e)
            }
        })
        cb()
    }


}