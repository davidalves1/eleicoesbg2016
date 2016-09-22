(function() {
	'use strict';

	angular
	    .module('eleicoes-app')
	    .controller('CandidatosCtrl', candidatosCtrl);

	 candidatosCtrl.$inject = ['$http'];

	function candidatosCtrl($http) {

		var vm = this;

		vm.hello = 'Olá novamente, Angular!';

		$http.get('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2016/56154/2/11/candidatos')
			.then(function(response) {
				vm.candidatos = response.data.candidatos;
			}, function(error) {
				console.log(error);
			});
	}
})();