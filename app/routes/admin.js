const {body, validationResult}= require('express-validator')
module.exports = function (app) {
  app.get("/admin", function (req, res) {
    app.app.controllers.admin.formulario_inclusao_notivia(app, req, res);
  });
  app.post("/noticias/salvar",[
    body('titulo')
    .notEmpty()
    .withMessage('Minimum 3 characters required!'),
  ], function (req, res) {
    
    app.app.controllers.admin.noticias_salvar(app, req, res);
    const erro =validationResult(req)
    if (!erro.isEmpty()) {
      console.log(erro.array())
    }   
    res.redirect('/noticias/salvar')
  });
};
