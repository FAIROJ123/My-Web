
app.controller('todoController', function($scope) {
  $scope.note={};
  $scope.note.title="";
  $scope.note.description="";
  $scope.todos=[];
  $scope.myvalue = false;
    $scope.add=function(){
      $scope.myvalue = true;
      var noteTitle =document.getElementById('div1').innerHTML;
      var noteDiscription =document.getElementById('div2').innerHTML;
      var object ={title:noteTitle,description:noteDiscription};
      $scope.todos.push(object);
    }
  });
