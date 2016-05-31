app.controller('MovieSearchController', function($scope, $http, $location){
  $scope.form = {};
  $scope.vm = {}
  $scope.search = function() {
    $http.get('http://www.omdbapi.com/?s=' + $scope.form.search)
      .then(function(res){
      $scope.vm.data = res.data.Search;
      $location.path('/')
    });
  }
});

app.controller('ShowController', function($scope, $http, $routeParams) {
  $scope.vm = {}
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.id)
    .then(function(res){
      $scope.vm.show = res.data;      
    });
})