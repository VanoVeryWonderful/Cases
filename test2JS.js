let a = document.getElementById("aaa");
let mass = ["imgTest/IMG-0003-00126.jpg", "imgTest/IMG-0003-00125.jpg", "imgTest/IMG-0003-00124.jpg", "imgTest/IMG-0003-00123.jpg", "imgTest/IMG-0003-00122.jpg" ];
console.log(mass[2]);
let b = mass[1];
console.log(b);
let c = mass[2];
let d = mass[3];
let e = mass[4];
console.log(mass[4]);
let p = document.getElementById('out');
let len = mass.length;
console.log(len);


document.getElementById("all").onwheel = function circle(event) {
	let x = event.deltaY;
	console.log(event);

	var i;
		for (i = 0; i<=len - 1; i++) {
		if (x > 0) {
			console.log(mass[i]);
			a.src = mass[i];
			}
		if (i===5) {
			break;
		}
	}
	var y;
	for (y = 5; y>=0; y--) {
		if(x < 0) {
			a.src = mass[y];
			console.log(mass[y]);
		}
		if(y===0){
		break;
	    }
	}

	return false;
}
