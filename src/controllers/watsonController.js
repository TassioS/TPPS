const watson = require("../models/watsonModel")
const requests = require("../models/requestsModel")
const { json } = require("express")
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
            res.status(201).send("Frase adicionada com sucesso");
        })
    },

    getSpeech : function(req,res) {
        watson.getPhraseById(req.con,req.query, async function(err,rows){
            if (err) {
                erroQuery(err);
                return;
            }
            const buffer = await requests.textTransform(rows[0].text)
            res.status(200).send(buffer);
        })
    }

}

function erroQuery(){
    console.log(err);
    res.send({ success: false, message: 'Erro', error: err });
}