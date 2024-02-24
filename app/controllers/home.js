module.exports.index = function (app,res,req) {
    var connection = app.config.DbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);
    console.log(noticiasModel());
    noticiasModel.get5ultimasNoticias(function (error, result) {
        console.log(result);
        res.render("home/index");
    });

    
    
}