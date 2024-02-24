module.exports.noticia = function (app, req, res) {
  var connection = app.config.DbConnection();
  var noticiasModel = new app.app.models.noticiasModel(connection);
  noticiasModel.getNoticia(function (err, result) {
    res.render("noticias/noticia", { noticia: result });
  });
};
module.exports.noticias = function (app, req, res) {
  var connection = app.config.DbConnection();
  var noticiasModel = new app.app.models.noticiasModel(connection);
  noticiasModel.getNoticias(function (err, result) {
    res.render("noticias/noticias", { noticias: result });
  });
};
