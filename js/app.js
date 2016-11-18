angular.module('miniRouting', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/js/home/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.state('products', {
			url: '/products/:id',
			templateUrl: '/js/products/productTmpl.html',
			controller: 'productsCtrl'
		})
		.state('settings', {
			url: '/settings',
			templateUrl: '/js/settings/settingTmpl.html',
			controller: 'settingCtrl'
		});

	$urlRouterProvider
		.otherwise('/');
});