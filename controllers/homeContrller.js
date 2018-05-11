app.controller('homeController', function($scope,$mdSidenav,readJson,$http,$state ) {
  $scope.toggleLeft = buildToggler('left');
  function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
}
$scope.Logout=function(){
  $state.go('login');
}
$scope.ToDo=function(){
  $state.go('home.todo');
}

var manufacturer=[];
var storage=[];
var os=[];
var camera=[];
$scope.readData=readJson.getData();
$scope.readData.then(function(response){
  $scope.jsonData=response.data;
  //console.log($scope.jsonData,response);
})



$scope.toggleFunction = function(expression,item){

switch (expression) {
  case 'manufacturer':
  selectData(manufacturer,item);
  break;
  case 'storage':
  selectData(storage,item);
  break;
  case 'os':
  selectData(os,item);
  break;
  case 'camera':
  selectData(camera,item);
  break;

}

};


$scope.arraymanufacturer=manufacturer;
$scope.arraystorage=storage;
$scope.arrayos=os;
$scope.arraycamera=camera;

});

var selectData=function (array,item) {
  console.log("array item",array,"item",item);
        var  index = array.indexOf(item);
        if (index> -1) {
          array.splice(index, 1);
        }
        else {
          array.push(item);
          console.log(array);
        }
      }

var GenericArray=function(array,expression,x){
  var filteredArray=[];
  for(var i=0;i<x.length;i++){
    var item2=x[i];
  for(var j=0;j<array.length;j++){
    var item=array[j];
  if(item2.specs[expression]==item){
    filteredArray.push(item2);
  }
}

}
return filteredArray;
}

app.filter("myFilter",function(){
  return function(x,arraymanufacturer,arraystorage,arrayos,arraycamera){
  var filteredArray=[];
  var temp=[];
  if(x!=undefined){

      if(arraymanufacturer.length>0 ||arraystorage.length>0||arrayos.lemgth>0||arraycamera.length>0)
      {
        filteredArray=GenericArray(arraymanufacturer,'manufacturer',x);

      }
      if(filteredArray.length>0){
        temp=filteredArray;
        filteredArray=[];
      }
      else{
        temp=x;

      }

    if(arraystorage.length>0){
      for(var i=0;i<temp.length;i++){
        var newitem=temp[i];
        filteredArray=GenericArray(arraystorage,'storage',temp);

      }
      temp=filteredArray;
      filteredArray=[];

    }

    if(arrayos.length>0){
      for(var i=0;i<temp.length;i++){
        var newitem=temp[i];
        filteredArray=GenericArray(arrayos,'os',temp);

      }
      temp=filteredArray;
      filteredArray=[];

    }

    if(arraycamera.length>0){

      for(var i=0;i<temp.length;i++){
        var newitem=temp[i];
        filteredArray=GenericArray(arraycamera,'camera',temp);

      }
      temp=filteredArray;
      filteredArray=[];

    }
  }  else{
      temp=x;
    }


  return temp;
};

});
