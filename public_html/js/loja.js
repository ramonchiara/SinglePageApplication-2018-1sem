$(document).ready(function () {

    $('#preco-min').on('input', function () {
        var min = $('#preco-min').val();
        $('#preco-min-lbl').html(min);
    });

    $('#preco-max').on('input', function () {
        var max = $('#preco-max').val();
        $('#preco-max-lbl').html(max);
    });

});