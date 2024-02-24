
module.exports.formulario_inclusao_notivia = function (app, req, res) {
  res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
};
module.exports.noticias_salvar = function (app, req, res) {
  var noticia = req.body;
  var connection = app.config.DbConnection();
  var noticiasModel = new app.app.models.noticiasModel(connection);
  noticiasModel.salvarNoticia(noticia, function (erro, result) {
  res.redirect("/noticias");
  });
};
