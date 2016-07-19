angular.module('ngVCI.login', [
  'ui.router.state',
  'ui.router'
  
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

.controller('LoginCtrl', function LoginController($scope) {
})

;
