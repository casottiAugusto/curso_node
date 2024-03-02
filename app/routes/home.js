module.exports = function(app){
    app.get('/', function(res,req){
        app.app.controllers.home.index(app, res,req);
    });
}