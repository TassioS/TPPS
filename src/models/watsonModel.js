module.exports = {
    getPhrases: function(con,callback){
        return con.query("SELECT * from phrases",callback);
    },

    addPhrase: function(con,data,callback){
        con.query(
            `INSERT INTO phrases SET 
            text = '${data.text}'`,
            callback
          )
    },

    getPhraseById: async function(con,data,callback){
        console.log('teste1')
        con.query(
            `SELECT p.text FROM phrases p
            WHERE p.id = '${data.id}'`,
            callback
          )
    }
};