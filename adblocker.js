/* AdBlock Detector by toxiicdev.net - https://github.com/toxiicdev/AdBlockDetector

Include this JavaScript file into your page to detect an AdBlocker/uBlock. Please keep the name as adblocker.js 
*/

var expectedElement = document.createElement('div');
expectedElement.id = 'ChangeMeWithRandomString';
expectedElement.style.display = 'none';
document.body.appendChild(expectedElement);
