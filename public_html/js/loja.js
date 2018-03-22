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

    function carregarProdutos() {
        $.ajax({
            url: 'produtos.json',
            method: 'GET',
            success: function (data) {
                produtos = data;
                mostrarProdutos();
            }
        });
    }

    function mostrarProdutos() {
        var min = $('#preco-min').val();
        var max = $('#preco-max').val();

        $('#produtos').html('');

        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            if (produto.preco >= min && produto.preco <= max) {
                $('#produtos').append(`
<div class="col-12 col-sm-6 col-md-4">
    <div class="card">
        <div class="card-header">${produto.nome}</div>
        <div class="card-body">
            <a href="#${produto.id}" class="btn btn-primary">Detalhes</a>
        </div>
    </div>
</div>
`);
            }
        }

        if ($('#produtos').html() === '') {
            $('#produtos').append(`<p class="alert alert-warning">Nenhum produto encontrado.</p>`);
        }
    }

    $(window).on('hashchange', function () {
        var hash = window.location.hash;
        var id = hash.substring(1);

        if (id === '') {
            $('#view').load('views/principal.html', carregarProdutos);
        } else {
            $('#view').load('views/produto.html', function () {
                carregarProduto(id);
            });
        }
    });

    function carregarProduto(id) {
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            if (produto.id == id) {
                $('#nome').html(produto.nome);
                $('#imagem').attr('src', `https://picsum.photos/150/150?image=${produto.id}`);
                $('#imagem').attr('alt', produto.nome);
                $('#preco').html(produto.preco);
                break;
            }
        }
    }

    $('#view').load('views/principal.html', carregarProdutos);

});
