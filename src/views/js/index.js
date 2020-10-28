$(document).ready(function(){
    const endpoint = "http://localhost:3000/watson"
    $("#addPhrase").click(function(){
        newPhrase();
    });

    

    function newPhrase(){
        body = {}
        body['text'] = $("#fraseInput").val()
        $.ajax({
            type: 'POST',
            dataTye: "json",
            url: endpoint+'/addPhrases',
            data: body
        }).done(function(msg){
            console.log(msg);
            location.reload();
        })
    }
});


