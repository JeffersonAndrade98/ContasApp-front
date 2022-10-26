function salvar(){
    var nome = $('#nome').val();
    $.ajax({
        url: 'http://192.168.100.5:8080/companhia/save',
        type: 'POST',
        data: { nome }
    }).done(function(response){
        console.log(response);

    }).fail(function(response){
        console.log(response.responseText);
    })
}