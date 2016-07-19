angular.module('ngVCI.home', [
])

.config(function config($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      main: {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller('HomeCtrl', function HomeController($scope, $element) {
  new Fingerprint2().get(function (result, components) {
    console.log(result); //a hash, representing your device fingerprint
    console.log(components); // an array of FP components
  });
})

;
