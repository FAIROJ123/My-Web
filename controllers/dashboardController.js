app.controller('dashboardController',function($scope, $mdDialog)
 {

   $scope.showAdvanced = function(event,item) {
        $mdDialog.show({
         locals:{data : item},
         controller: dialogController,
         templateUrl: 'templates/dialogbox.html',
         parent: angular.element(document.body),
         targetEvent: event,
         clickOutsideToClose:true,

  });
};
function dialogController($scope,data,$mdDialog) {
  $scope.data=data;
  $scope.cancel = function() {
      $mdDialog.cancel();
    };
}
});
