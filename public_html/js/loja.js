var loja = angular.module('loja', []);

loja.controller('principal', function ($scope, $http) {

    $scope.min = 0;
    $scope.max = 10000;

    $scope.produtos = [];

    $http.get('produtos.json').then(function (response) {
        $scope.produtos = response.data;
    });

    $scope.filtro = function (produto) {
        return produto.preco >= $scope.min && produto.preco <= $scope.max;
    };

});
