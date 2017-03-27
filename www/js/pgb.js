function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function personalData() {

	info =  'This is my personal data' + '\n' +
			'Name    : Serhiy'     + '\n' + 
			'Surname : Karaptan'   + '\n' + 
			'Nr. albomu : 182368' + '\n' +
			'E-mail: s.karaptan@gmail.com ' + '\n';

	navigator.notification.alert(info);
	
}