module.exports = app => {
    require('./burgerRoutes')(app)
    require('./viewRoutes')(app)
}