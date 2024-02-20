
module.exports = function (app) {
   
    app.get('/noticia',function(req,res){
        
        var connection=app.config.DbConnection();
        var noticiasModel= new app.app.models.noticiasModel(connection);
        noticiasModel.getNoticia(function(err,result){
            res.render("noticias/noticia",{noticia:result})
        })
        });
};

