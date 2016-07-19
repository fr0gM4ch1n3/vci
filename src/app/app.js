angular.module('ngVCI', [
  'templates-app',
  'templates-common',
  'pascalprecht.translate',
  'ui.router',
  'ngSanitize',
  'ui.router.state',
  'ui.bootstrap',
  'ngStorage',
  'jwt',
  'ngVCI.home',
  'ngVCI.login',
  'ngVCI.signup'
])

.config(['$locationProvider', function ($locationProvider) {
  /*$locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  }).hashPrefix('!');*/
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

.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        if ($localStorage.token) {
          config.headers.Authorization = 'Bearer ' + $localStorage.token;
        }
        return config;
      },
      responseError: function (response) {
        if (response.status === 401 || response.status === 403) {
          $location.path('/signin');
        }
        return $q.reject(response);
      }
    };
  }]);
}])

.run(['$rootScope', '$state', '$stateParams', '$location',
  function ($rootScope, $state, $stateParams, $location) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.location = $location;
  }
])

.controller('AppCtrl', ['$rootScope', '$scope', '$translate', '$location', '$localStorage', 'jwt',
  function AppCtrl($rootScope, $scope, $translate, $location, $localStorage, jwt) {
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

  $scope.signin = function () {
    var formData = {
      username: this.username,
      password: this.password
    };

    jwt.signin(formData, function (res) {
      $localStorage.token = res.data.token;
      $scope.myDetails = res;
    }, function () {
      $rootScope.error = 'Failed to signin';
    });
    $scope.me();
  };

  $scope.signup = function () {
    var formData = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    jwt.signup(formData, function (res) {
      $localStorage.token = res.data.token;
      $scope.myDetails = res;
      $location.path('/');
    }, function () {
      $rootScope.error = 'Failed to signup';
    });
  };

  $scope.me = function () {
    jwt.me(function (res) {
      $scope.myDetails = res;
    }, function () {
      $rootScope.error = 'Failed to fetch details';
    });
  };
  $scope.me();

  $scope.logout = function () {
    jwt.logout(function () {
      $scope.myDetails = {};
      $location.path('/');
    }, function () {
      $rootScope.error = 'Failed to logout';
    });
  };
}])

;
