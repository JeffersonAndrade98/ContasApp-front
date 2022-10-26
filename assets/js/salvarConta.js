$(document).ready(function () {
    $.ajax({
        url: 'http://192.168.100.5:8080/companhia/getAll',
        type: 'GET'
    }).done(function(response){
        $.each(response, function (i, value) {
            var n = value.nome.toString();
            var id = value.id;
            $('#idCompanhia').append('<option id=' + id + ' value='+id+'>' + n + '</option>');
        });
    }).fail(function(response){
        console.log(response.responseText);
    })
});

function salvar(){

    var formulario = $('#formCadastrarConta')[0];
    const formData = new FormData(formulario);
    const formProps = Object.fromEntries(formData);

    $.ajax({
        url: 'http://192.168.100.5:8080/contas/save',
        type: 'POST',
        data: formProps,
        success: function(response){
            Swal.fire(
                'Ok',
                'Conta cadastrada com sucesso!',
                'success'
              ),
            formulario.reset();
            console.log(response);
        }
    }).fail(function(response){
        alert("Error "+ response.responseJSON.error + 
            " ("+ response.responseJSON.status + ")" 
            + "\n" + response.responseJSON.message);
        console.log(response);
    })
}



