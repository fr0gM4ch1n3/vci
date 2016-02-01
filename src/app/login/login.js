angular.module('ngVCI.login', [
])

.config(function config($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    views: {
      main: {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Login' }
  });
})

.controller('LoginCtrl', function LoginController($scope, $element) {
  $scope.username = '';
  $scope.loginName = '';

  $scope.signin = function() {
  };
})

;
