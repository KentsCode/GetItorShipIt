$(document).ready(function() {


$("#submit-button").click(function() {
		localStorage.setItem("lastSearch", $("#search-input").val().trim());
		console.log(localStorage.getItem("lastSearch"));
	});

	console.log(localStorage.getItem("lastSearch"));

	var productSearchTerm = localStorage.getItem("lastSearch");
	console.log(productSearchTerm);


});