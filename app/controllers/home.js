module.exports.index = function(app,req,res){

  var connection = app.config.DbConnection();
  var noticiasModel = new app.app.models.noticiasModel(connection);
  noticiasModel.get5ultimasNoticias(function(error, result){
    res.render("home/index",{noticias:result});
  });
}