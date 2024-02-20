const { body, validationResult } = require("express-validator");

module.exports = function (app) {
  app.get("/Admin", function (req, res) {
    res.render("admin/form_add_noticia");
  });

  app.post(
    "/noticias/salvar",
    [body("titulo").notEmpty()],
    function (req, res) {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        res.status(400).json({ error: error.array() });
        res.redirect("/admin");
      }
       res.status(200).json({ success: "Successful " });
      var noticias = req.body;
      var connection = app.config.DbConnection();
      var noticiasModel = new app.app.models.noticiasModel(connection);
      noticiasModel.salvarNoticia(noticias, function (erro, result) {
        res.redirect("/noticias");
      });
    }
  );
};
