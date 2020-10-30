const fs = require('fs');
const apiUrl = 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/d3a6e33b-89ee-424b-81e5-1f8032206683'
const apikey = 'qDfrgGwZOhImw0Q5wOeZLsh-6n7triYWQtDlR-Gqcagm'
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const { resolve } = require('path');

const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: apikey,
    }),
    serviceUrl: apiUrl,
  });

module.exports = {
    textTransform : async function(text){
    return new Promise(resolve => {
        const synthesizeParams = {
            text: text,
            accept: 'audio/wav',
            voice: 'pt-BR_IsabelaVoice',
            };
        textToSpeech.synthesize(synthesizeParams)
            .then(response => {
                return textToSpeech.repairWavHeaderStream(response.result);
            })
            .then(buffer => {
                resolve(buffer)
            })
            .catch(err => {
                console.log('error:', err);
            });
        })
    }
};