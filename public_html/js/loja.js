$(document).ready(function () {

    $('#preco-min').on('input', function () {
        var min = $('#preco-min').val();
        $('#preco-min-lbl').html(min);
    });

    $('#preco-max').on('input', function () {
        var max = $('#preco-max').val();
        $('#preco-max-lbl').html(max);
    });

    $.ajax({
        url: 'produtos.json',
        method: 'GET',
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                var produto = data[i];
                $('#produtos').append(`<li><a href="#${produto.id}">${produto.nome}</a> - R$ ${produto.preco}</li>`);
            }
        }
    });

});