var app=angular.module('routerApp',['ngMaterial','ui.router','ngMessages']);
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login',{
           url: '/login',
           templateUrl: 'templates/Login.html',
           controller: 'loginController'
  })
  .state('home',{
           url: '/home',
           templateUrl: 'templates/home.html',
           controller :'homeController'

  })
  .state('home.dashboard',{
           url: '/dashboard',
           templateUrl: 'templates/dashboard.html',
           controller :'dashboardController'
});

  $urlRouterProvider.otherwise("/login");
  });
