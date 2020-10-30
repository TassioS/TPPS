$(document).ready(function(){
    const endpoint = "http://localhost:3000/watson"
    $("#addPhraseButton").click(function(){
        newPhrase();
    });

    createList();


    function createList(){
        $.ajax({
            type: 'GET',
            dataType: "json",
            url: endpoint+'/getPhrases',
        }).done(function(data){
            fillList(data)
        })
    }

    function fillList(data){
        
        data.forEach(Element => {
            $("#phrasesDiv").append(
                $('<div class="phrasesElements">').append(
                    $('<li class="list-group-item" id=Element.id> </li> <button type="button" class="btn btn-primary" onclick="listen(this)" >Ouvir</button>'.replace('Element.id',Element.id)))
            )
            $("#x".replace('x',Element.id)).text(Element.text)
        });
    }

    function newPhrase(){
        body = {}
        body['text'] = $("#fraseInput").val()
        $.ajax({
            type: 'POST',
            dataType: "json",
            url: endpoint+'/addPhrases',
            data: body
        }).done(function(data){
            console.log(data)
        })
        location.reload();
    }
});

function listen(val){
    const endpoint = "http://localhost:3000/watson"
    body = {}
    body['id'] = val.parentElement.firstChild.id
    ToSpeech(body)
}

function ToSpeech(body) {
    const endpoint = "http://localhost:3000/watson"
    try {
        const sound = new Howl({
            html5: true,
            src: endpoint+'/getSpeech?id='+body.id
        });
        sound.play();
    } catch (error) {
        console.log(error)
    }
}

