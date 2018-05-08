app.controller('loginController', function($scope,$state) {

$scope.login=function(){
  var email=$scope.email;
  var password=$scope.password;

  if(email== $scope.email && password==$scope.password)
  {
    $state.go('home.dashboard');
  }
  else{
    $scope.error = "Incorrect username/password !";

  }

}


 });
