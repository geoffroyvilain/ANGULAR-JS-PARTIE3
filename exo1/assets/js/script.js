var testApp = angular.module('app',[]); //création du module

testApp.controller('testCtrl', function($scope){ // creation du controller
  $scope.firstSentence = 'L\'Axolotl, Ambystoma mexicanum, est une espèce d\'urodèles de la famille des Ambystomatidae.';
  $scope.secondSentence = 'L\'ORNITHORYNQUE (ORNITHORHYNCHUS ANATINUS) EST UN ANIMAL SEMI-AQUATIQUE ENDÉMIQUE DE L\'EST DE L\'AUSTRALIE, Y COMPRIS LA TASMANIE.';
});
