chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		var logo_url = document.getElementsByClassName("gb_Ea")[0].getAttribute("src");
		var organization = "gsa.gov";
		var presence = logo_url.indexOf(organization);
		if(presence > -1) {
			var imgURL = chrome.extension.getURL("icons/logo.gif");
			document.getElementsByClassName("gb_Da")[0].style.backgroundImage = 'url(' + imgURL + ')';
			document.getElementsByClassName("gb_Ea")[0].setAttribute("src",imgURL)
		}
		// ----------------------------------------------------------

	}
	}, 10);
});