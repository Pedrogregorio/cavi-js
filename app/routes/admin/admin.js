module.exports = function (app) {
    app.get('/admin', function (req, res) {
        app.app.controllers.admin.log(app, req, res)
    })
}