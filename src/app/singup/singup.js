angular.module( 'ngVCI.singup', [
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'singup', {
    url: '/singup',
    views: {
      "main": {
        controller: 'singupCtrl',
        templateUrl: 'singup/singup.tpl.html'
      }
    },
    data:{ pageTitle: 'Singup' }
  });
})

.controller('singupCtrl', function HomeController($scope, $element) {
  $scope.person = {};

  $scope.signup = function() {

  };
})

;