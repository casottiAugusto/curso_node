module.exports = function (app) {
    app.get('/',function(req,res){
        app.app.controllers.home.index(res,req,app)
    });
};