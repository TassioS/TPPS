const watson = require("../models/watsonModel")
const requests = require("../models/requestsModel")
const apikey = 'qDfrgGwZOhImw0Q5wOeZLsh-6n7triYWQtDlR-Gqcagm'
require("dotenv").config()

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
            res.status(201).json("Frase adicionada com sucesso");
        })
    },

    getPhraseById : function(req,res) {
        watson.getPhraseById(req.con,req.body, function(err,rows){
            if (err) {
                erroQuery(err);
                return;
            }
            res.status(200).send(rows);
        })
    },

    getSpeech : function(req,res) {
        watson.getPhraseById(req.con,req.body, function(err,rows){
            if (err) {
                erroQuery(err);
                return;
            }
            requests.textTransform(rows[0].text)
            res.status(200).json("Ok")
        })
    }

}

function erroQuery(){
    console.log(err);
    res.send({ success: false, message: 'Erro', error: err });
}