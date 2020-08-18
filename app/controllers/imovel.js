module.exports.imovel = function(app, req, res) {
    
    const conn = app.config.dbConnection();

    const caviModel = new app.app.models.caviDAO(conn);

    const id_imovel = req.query;

    caviModel.getImovel(id_imovel, function(err, result) {
        // console.log(result)
        res.render("imovel", {imovel: result});
    });
}