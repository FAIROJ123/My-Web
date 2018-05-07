app.controller('loginController', function($scope,$state) {

var emailPattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordPattern=/^[a-z,0-9]+$/;
var email=document.getElementById("email");
var password=document.getElementById("password");


  $scope.login=function(){


    if(email.value.match(emailPattern) && password.value.match(passwordPattern))
    {

       $state.go('home.dashboard');
    }
    else{
      document.getElementById("error").innerHTML="<span class='errorMessage'>Enter Correct Username/Password</span>";
    }
  }
  
});
