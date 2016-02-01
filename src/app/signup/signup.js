angular.module('ngVCI.signup', [
])

.config(function config($stateProvider) {
  $stateProvider.state('signup', {
    url: '/signup',
    views: {
      main: {
        controller: 'signupCtrl',
        templateUrl: 'signup/signup.tpl.html'
      }
    },
    data:{
      pageTitle: 'Signup'
    }
  });
})

.controller('signupCtrl', function SignupController($scope, $element) {
  $scope.person = {};

  $scope.signup = function() {
  };
})

;