var list = document.getElementById("list");
var add = document.getElementById("addElem");


add.addEventListener('click', function() {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		var list = document.getElementById("list");
		var add = document.getElementById("addElem")
		let url = tabs[0].url;
		console.log(url)

		/*
		Code below must be replaced with inserting the current URL
		to the database and then creating the <li> tag for it.

		Then the <li> tag will be made better-looking using some
		strong tags and css
		*/
		var itemsByTagName = document.getElementsByTagName("li");
		list.innerHTML += '<li>item ' + url + '</li>'

	});
});
