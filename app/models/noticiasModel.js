class Noticias {
 
   constructor(connection) {
       this._connection = connection
   }

   getNoticias = (callback) => {
       this._connection.query("SELECT * FROM noticias", callback)
   }
   
   getNoticia = (callback) => {
       this._connection.query("SELECT * FROM noticias WHERE id_noticia = 2", callback)
   }

   salvarNoticia = (noticia, callback) => {
    console.log(noticia)
      this._connection.query("INSERT INTO noticias SET ?", noticia, callback)
   }
   
}

module.exports = () => {

   return Noticias;
}