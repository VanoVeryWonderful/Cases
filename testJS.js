jQuery.preloadImages = function()
 {
  for(var i = 0; i < arguments.length; i++)
  {
   jQuery("<img>").attr("src", arguments[ i ]);
  }
 };
$.preloadImages("imgTest/IMG-0003-00122.jpg", "imgTest/IMG-0003-00123.jpg", "imgTest/IMG-0003-00124.jpg", "imgTest/IMG-0003-00125.jpg", "imgTest/IMG-0003-00126.jpg");




let mass = document.getElementsByClassName("imges");

console.log(mass.length);
let hid = mass[0];
console.log(hid);
let arr = new Array();

arr[0] = "imgTest/IMG-0003-00122.jpg";
arr[1] = "imgTest/IMG-0003-00123.jpg";
arr[2] = "imgTest/IMG-0003-00124.jpg";
arr[3] = "imgTest/IMG-0003-00125.jpg";
arr[4] = "imgTest/IMG-0003-00126.jpg";
console.log(arr);



let e = document.getElementById("eee");
let d = document.getElementById("ddd");
document.getElementById('all').onwheel = function(event) {
	console.log(event);
	let x = event.deltaY;

	if (x > 0) {
		e.style.visibility = "hidden";
	}
	else if( x < 0) {
		e.style.visibility = "visible";
	}
	return false;
}