angular.module('ngVCI.passwordReset', [
  'ui.router.state',
  'ui.router'
])

.config(function config($stateProvider) {
  $stateProvider.state('passwordReset', {
    url: '/passwordReset',
    views: {
      main: {
        controller: 'passwordResetCtrl',
        templateUrl: 'passwordReset/passwordReset.tpl.html'
      }
    },
    data:{ pageTitle: 'passwordReset' }
  });
})

.controller('passwordResetCtrl', function passwordResetController($scope, $element, $state) {
})

;
