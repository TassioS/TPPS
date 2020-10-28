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
            $("#phrasesList").append(
                $('<li class="list-group-item" id=Element.id>texto'.replace('Element.id',Element.id)).append(
                    '<>'
                )
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
        })
        location.reload();
    }
});


