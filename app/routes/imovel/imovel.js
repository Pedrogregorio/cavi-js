module.exports = function (app) {
    app.get('/imovel', function (req, res) {
        app.app.controllers.imovel.imovel(app, req, res)
    })
}