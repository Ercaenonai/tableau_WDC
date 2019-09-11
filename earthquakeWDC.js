(function () {
	var myConnector = tableau.makeConnector();

	myConnector.getSchema = funtion (schemaCallback) {

	};

	myConector.getData = funtion (table, doneCallback) {

	};

	tableau.registerConnector(myConnector);

})();

$(document).ready(funtion () {
	$("#submitButton").click(funtion () {
		tableau.connectionName = "USGS Earthquake Feed";
		tableau.submit();
	});
	
});
