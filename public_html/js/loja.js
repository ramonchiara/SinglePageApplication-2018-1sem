$(document).ready(function () {

    $('#preco-min').on('input', function () {
        var min = $('#preco-min').val();
        $('#preco-min-lbl').html(min);
        mostrarProdutos();
    });

    $('#preco-max').on('input', function () {
        var max = $('#preco-max').val();
        $('#preco-max-lbl').html(max);
        mostrarProdutos();
    });

    var produtos = [];

    $.ajax({
        url: 'produtos.json',
        method: 'GET',
        success: function (data) {
            produtos = data;
            mostrarProdutos();
        }
    });

    function mostrarProdutos() {
        var min = $('#preco-min').val();
        var max = $('#preco-max').val();

        $('#produtos').html('');

        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            if (produto.preco >= min && produto.preco <= max) {
                $('#produtos').append(`<li><a href="#${produto.id}">${produto.nome}</a> - R$ ${produto.preco}</li>`);
            }
        }

        if ($('#produtos').html() === '') {
            $('#produtos').append(`<li><p class="alert alert-warning">Nenhum produto encontrado.</p></li>`);
        }
    }

});