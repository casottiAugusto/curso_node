const {body, validationResult}= require('express-validator')
module.exports = function (app) {
  app.get("/admin", function (req, res) {
    app.app.controllers.admin.formulario_inclusao_notivia(app, req, res);
  });
  app.post("/noticias/salvar", function (req, res) {
  app.app.controllers.admin.noticias_salvar(app, req, res);
  });
};
