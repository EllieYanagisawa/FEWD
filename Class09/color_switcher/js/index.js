var grayColor = 'gray';
var whiteColor = '#fff';
var blackColor = 'black';

document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  document.body.style.backgroundColor = grayColor;
 document.body.style.color = whiteColor;
}

function switchWhite() {
  document.body.style.backgroundColor = whiteColor;
  document.body.style.color = blackColor;
}