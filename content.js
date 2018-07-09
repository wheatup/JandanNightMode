var logos = document.body.getElementsByClassName('logo');
if(logos){
	var logo = logos[0].children[0].children[0];
	var imgURL = chrome.extension.getURL("images/logo-2015-night.gif");
	var background = `url("${imgURL}") no-repeat scroll 0 0 transparent`;
	logo.style.background = background;
}