// For: http://www.webdeveloper.com/forum/showthread.php?t=238170



var imgLinks = [
// format: ['imageSource','imageLinkURL'],
  ['https://pixabay.com/static/uploads/photo/2015/07/13/11/55/drive-843075_960_720.jpg','https://www.pixabay.com'],
  ['https://pixabay.com/static/uploads/photo/2014/02/27/10/33/hiking-275796_960_720.jpg','https://www.pixabay.com'],
  ['https://pixabay.com/static/uploads/photo/2016/05/03/23/40/nature-1370526_960_720.jpg','https://www.pixabay.com'],
  ['https://pixabay.com/static/uploads/photo/2014/05/27/08/01/child-355176_960_720.jpg','https://www.pixabay.com'],
  ['https://pixabay.com/static/uploads/photo/2016/04/27/18/21/village-1357192_960_720.jpg','https://www.pixabay.com'],
  ['https://pixabay.com/static/uploads/photo/2015/03/26/09/43/grand-central-station-690180_960_720.jpg','https://www.pixabay.com']	// NOTE: no comma after last entry
];

function SetImage(randLink,imgPtr) {
  imgPtr = parseInt(imgPtr);
  document.getElementById('randomize-img').src = imgLinks[imgPtr][0];
  document.getElementById('randomize-img').alt = imgLinks[imgPtr][1];
  document.getElementById('Captions').innerHTML = imgLinks[imgPtr][1];
}

function RandomLink() {
  var R = Math.random() * imgLinks.length;
  SetImage('Pics',R);
}

function GoToURL(URL) { document.location.href = URL; }

onload = function () { RandomLink(); }