angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('history', {
      url: '/history',
      templateUrl: 'templates/history.html',
      controller: 'historyCtrl'
    })
    
      
        
    .state('bill', {
      url: '/bill',
      templateUrl: 'templates/bill.html',
      controller: 'billCtrl'
    })
        
      
    
      
        
    .state('shares', {
      url: '/shares',
      templateUrl: 'templates/shares.html',
      controller: 'sharesCtrl'
    })
        
      
    
      
        
    .state('dishes', {
      url: '/dishes',
      templateUrl: 'templates/dishes.html',
      controller: 'dishesCtrl'
    })
        
      
    
      
        
    .state('options', {
      url: '/options',
      templateUrl: 'templates/options.html',
      controller: 'optionsCtrl'
    })





    .state('pay', {
      url: '/pay',
      templateUrl: 'templates/pay.html',
      controller: 'payCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/history');

});
