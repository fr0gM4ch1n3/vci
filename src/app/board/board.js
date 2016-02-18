angular.module( 'ngVCI.board', [
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'board', {
    url: '/board',
    views: {
      "main": {
        controller: 'BoardCtrl',
        templateUrl: 'board/board.tpl.html'
      }
    },
    data: { pageTitle: 'VCI Management' }
  });
})

.controller('BoardCtrl', function HomeController($scope, $element) {
})

;
