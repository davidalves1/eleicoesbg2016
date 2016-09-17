(function() {
	'use strict';

	angular
		.module('eleicoes-app')
		.directive('CardCandidato', cardCandidato);

	function cardCandidato() {
		return {
			templateUrl: "src/views/candidato.html",
			restrict: "AE"
		};
	}
})