'use strict';

/**
 * @ngdoc function
 * @name workingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workingApp
 */
angular.module('workingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
