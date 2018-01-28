$(document).ready(function() {


	
	$("#submit-button").click(function() {
		localStorage.setItem("lastSearch", $("#search-input").val().trim());
		console.log(localStorage.getItem("lastSearch"));
	});

	console.log(localStorage.getItem("lastSearch"));

	var productSearchTerm = localStorage.getItem("lastSearch");
	console.log(productSearchTerm);
	//document.onload = function() {walmartProductGetter()};


	function walmartProductGetter () {

	 //gets the Walmart Products
	    
	   	var APIKeyWalmart = "s7yjqttef8f3nbazyhmnc6zv";
    	var queryURLWalmart = "http://api.walmartlabs.com/v1/search?apiKey=" + APIKeyWalmart + "&query=" + productSearchTerm //$("#buttonTextInput").val().trim();
    	//console.log(queryURLWalmart);

	    $.ajax({
	      url: queryURLWalmart,
	      method: "GET"
	    }).done(function(response) {
	    	console.log(response);

	   	$("#walmart-products").empty();
	    	for (var i = 0; i < 9.5; i++) {	
	    			var productBeingAdded = $("<img>");
	    			productBeingAdded.attr("src", response.items[i].imageEntities[0].mediumImage);
	    			$("#walmart-products").append("$"+response.items[i].salePrice);	
	    			$("#walmart-products").append(productBeingAdded);
	    	}

	    });

	};
	walmartProductGetter();


	function eBayProductGetter () {
		
		var searchTermEbayNoSpaces = productSearchTerm.replace(/\s/g, '+');

		var queryURLebay = "http://open.api.ebay.com/shopping?&callname=FindItems&appid=KennethP-GetItOrS-PRD-3134e8f72-9cf8d2de&responseencoding=JSON&QueryKeywords=" + searchTermEbayNoSpaces + "&itemcount=10&version=1015";
		console.log(queryURLebay);

		console.log(searchTermEbayNoSpaces);


		 $.ajax({
	      url: queryURLebay,
	      method: "GET"
	    }).done(function(response) {
	    console.log(response);
	    var responseParsed = JSON.parse(response);
	    console.log(responseParsed.Item[0].ConvertedCurrentPrice.Value);
		$("#ebay-products").empty();
	    	for (var i = 0; i < 3; i++) {	
	    			var productBeingAdded = $("<img>");
	    			productBeingAdded.attr("src", responseParsed.Item[i].GalleryURL);
	    			console.log(JSON.stringify(responseParsed.Item[i].GalleryURL));
	    			$("#ebay-products").append("$"+responseParsed.Item[i].ConvertedCurrentPrice.Value);	
	    			$("#ebay-products").append(productBeingAdded);
	    	}

		});
	};
	eBayProductGetter();



/*	$("#newButton").click(function amazonProductGetter () {
	 	console.log(this);
		console.log($("#buttonTextInput").val());

	 //gets the Walmart Products
	    
	   	//var APIKeyAmazon = "s7yjqttef8f3nbazyhmnc6zv";
    	var searchTermAmazon = this.id; //need to update this! it should be equal to the value of the button that gets pushed
    	var queryURLAmazon = "http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&Operation=ItemSearch&SubscriptionId=AKIAJ4RCQZ7YL7NXFULA&AssociateTag=GetItOrShipIt&SearchIndex=All&Keywords=" + $("#buttonTextInput").val().trim() + "&ResponseGroup=Images,ItemAttributes,Offers";
    	console.log(queryURLAmazon);

	    $.ajax({
	      url: queryURLAmazon,
	      method: "GET"
	    }).done(function(response) {
	    	console.log(response);

	   	/* $("#Div1").empty();
	    	for (var i = 0; i < 9.5; i++) {	
	    			var productBeingAdded = $("<img>");
	    			productBeingAdded.attr("src", response.items[i].imageEntities[0].mediumImage);
	    			$("#Div1").append("$"+response.items[i].salePrice);	
	    			$("#Div1").append(productBeingAdded);
	    	} */

	   //});

//


	//}); 

});