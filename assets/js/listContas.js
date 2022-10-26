$(document).ready(function () {
    $.ajax({
        url: 'http://192.168.100.5:8080/contas/getAll',
        type: 'GET'
    }).done(function(response){
        
        $.each(response, function (i, value) {
            montarDivCard(i, value);
            /* $('#tipoConta').text(value.tipoConta.descricao);
            $('#mesAno').text((value.mes+1) + " / " + value.ano);
            $('#status').text(value.status);
            $('#ano').text(value.ano);
            $('#companhia').text(value.companhia.nome);
            $('#valor').text("R$ "+value.valor); */
        });
    }).fail(function(response){
        console.log(response.responseText);
    })
});

function montarDivCard(k, v) {
    var container = document.getElementById("divCard");
    var el = document.createElement("div");
    el.className = "courses-container";
    el.id = "loja";
    el.innerHTML = montarDiv(k, v);
    container.append(el);
}

function montarDiv(k, v) {
    console.log(k,v)
    var strVar = "";

    strVar += `<div class="course" id="divCard">
    <div class="course-preview">
        <h6>Tipo de conta</h6>
        <h2 id="tipoConta">${v.tipoConta.descricao}</h2>
        <a href="#" id="mesAno">${v.mes} / ${v.ano}<i class="fas fa-chevron-right"></i></a>
    </div>
    <div class="course-info">
        <div class="progress-container">
            <div class=""></div>
            <span id="status">
              ${v.status}
            </span>
        </div>
        <h6 id="ano">id ${v.idConta}</h6>
        <h2 id="companhia">${v.companhia.nome}</h2>
  <h3 id="valor">R$ ${v.valor}</h3>
        <button class="btn">INFO PAY</button>
    </div>
</div>`;

    if (v.status == "ABERTO") {
        $('#status').addClass('span-aberto');
    }
    
    return strVar;

}