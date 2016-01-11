angular.module('ngVCI', [
  'templates-app',
  'templates-common',
  'pascalprecht.translate',
  'ui.router',
  'ngSanitize',
  'ui.router.state',
  'ui.bootstrap',
  'ngVCI.home'
])

.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  }).hashPrefix('!');
}])

.config(['$urlRouterProvider', function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
}])

.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.useStaticFilesLoader({ prefix: '/i18n/', suffix: '.json' });
  $translateProvider.fallbackLanguage('en_US');
  // $translateProvider.registerAvailableLanguageKeys(['en_US', 'de_DE'], {
  //   de: 'de_DE',
  //   en: 'en_US',
  //   en_US: 'en_US',
  //   en_UK: 'en_US',
  //   de_DE: 'de_DE',
  //   de_CH: 'de_DE'
  // });
  // $translateProvider.determinePreferredLanguage();
  $translateProvider.use('en_US');
}])

.run(['$rootScope', '$state', '$stateParams', '$location',
  function ($rootScope, $state, $stateParams, $location) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.location = $location;
  }
])

.controller('AppCtrl', ['$rootScope', '$scope', '$translate', function AppCtrl($rootScope, $scope, $translate) {
  $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngVCI' ;
    }
  });

  $scope.languages = ['en_US', 'de_DE'];
  $scope.language = 'en_US';

  $scope.trans = $translate;

  $scope.changeLang = function (key) {
    $translate.use(key).then(function (key) {
      $scope.language = key;
    }, function (key) {
      console.log('Something went wrong!');
    });
  };
}])

;
