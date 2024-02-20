
module.exports = function (app) {
   
    app.get('/noticias',function(req,res){
        var connection=app.config.DbConnection();
        var noticiasModel= new app.app.models.noticiasModel(connection);
        noticiasModel.getNoticias(function(err,result){
          res.render("noticias/noticias",{noticias : result})
           
        });

      
    });
    
};
