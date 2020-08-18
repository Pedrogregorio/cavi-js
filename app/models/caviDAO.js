function CaviDAO(conn){
	this._connection = conn;

}

CaviDAO.prototype.getImoveis = function(callback){
	this._connection.query('select * from imoveis', callback);
}

CaviDAO.prototype.getImovel = function(id_imovel, callback){
	this._connection.query('select * from imoveis where id_imovel = '+ id_imovel.id_imovel, callback)
}

CaviDAO.prototype.salvarNoticia = function(noticia, callback){
	this._connection.query('insert into noticias set ?', noticia, callback);
}

CaviDAO.prototype.get5UltimasNotiias = function (callback) {
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback)
}

module.exports = function() {
	
	return CaviDAO;
}