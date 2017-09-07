/**
 * Created by haoguo on 17/7/12.
 */
var app = angular.module('app', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/view1');

    $stateProvider
        .state('view1', {
            url: '/view1',
            templateUrl: 'view1/view1.html',
            controller: 'view1'
        })
        .state('view2', {
            url: '/view2',
            templateUrl: 'view2/view2.html'
        });
}]);
//var fun=require(['../app/view1/view1']);
app.service('myService',function(){
    //用来共享数据
    this.name='serviceName'
});
app.controller('main',function($scope,myService){
  console.log(myService.name);
});

app.controller('view1',function($scope){


});

