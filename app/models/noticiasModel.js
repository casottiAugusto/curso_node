class Noticias {
 
   constructor(connection) {
       this._connection = connection
   }

   getNoticias = (callback) => {
       this._connection.query("SELECT * FROM noticias", callback)
   }
   
   getNoticia = (callback) => {
       this._connection.query("SELECT * FROM noticias WHERE id_noticia = 26", callback)
   }

   salvarNoticia = (noticia, callback) => {
    this._connection.query("INSERT INTO noticias SET ?", noticia, callback)
   }
   get5ultimasNoticias = (callback) => {
    this._connection.query('select * from noticias order by data_criacao desc limit 5 ',callback)
   }
   
}

module.exports = () => {

   return Noticias;
}