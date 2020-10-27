const watson = require("../models/watsonModel")

module.exports = {
    getPhrase : function(req,res) {
        watson.getPhrases(req.con, function(err,rows){
            if (err) {
                erroQuery(err);
                return;
            }
            res.status(200).send(rows);
        })
    },
    addPhrase : function (req,res) {
        watson.addPhrase(req.con,req.body,function(err){
            if (err) {
                erroQuery(err);
                return;
            }
            res.status(201).send("Frase adicionada com sucesso");
        })
    }
}

function erroQuery(){
    console.log(err);
                res.send({ success: false, message: 'Erro', error: err });
}