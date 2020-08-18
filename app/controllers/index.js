module.exports.imoveis = function(app, req, res) {
    
    const conn = app.config.dbConnection();

    const caviModel = new app.app.models.caviDAO(conn);

    caviModel.getImoveis(function(err, result) {
        res.render("index", {imoveis: result});
    });
        
}