var listaController = angular.module('listaControllerApp', []);
 
listaController.controller('ListaControllerCtrl', ['$scope', function($scope) {
 
    $scope.itens = [
        {nome: 'Jetta', marca: 'Volkswagen', comprado: false},
        {nome: 'City', marca: 'Honda', comprado: false}
    ];
 
}]);