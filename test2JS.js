
let images = ["imgTest/IMG-0003-00126.jpg", "imgTest/IMG-0003-00125.jpg", "imgTest/IMG-0003-00124.jpg", "imgTest/IMG-0003-00123.jpg", "imgTest/IMG-0003-00122.jpg", "imgTest/IMG-0003-00121.jpg", "imgTest/IMG-0003-00120.jpg", "imgTest/IMG-0003-00119.jpg", "imgTest/IMG-0003-00118.jpg", "imgTest/IMG-0003-00117.jpg", "imgTest/IMG-0003-00116.jpg", "imgTest/IMG-0003-00115.jpg", "imgTest/IMG-0003-00114.jpg", "imgTest/IMG-0003-00113.jpg", "imgTest/IMG-0003-00112.jpg", "imgTest/IMG-0003-00111.jpg", "imgTest/IMG-0003-00110.jpg", "imgTest/IMG-0003-00109.jpg", "imgTest/IMG-0003-00108.jpg", "imgTest/IMG-0003-00107.jpg", "imgTest/IMG-0003-00106.jpg", "imgTest/IMG-0003-00105.jpg", "imgTest/IMG-0003-00104.jpg", "imgTest/IMG-0003-00103.jpg", "imgTest/IMG-0003-00102.jpg", "imgTest/IMG-0003-00101.jpg", "imgTest/IMG-0003-00100.jpg", "imgTest/IMG-0003-00099.jpg", "imgTest/IMG-0003-00098.jpg", "imgTest/IMG-0003-00097.jpg", "imgTest/IMG-0003-00096.jpg", "imgTest/IMG-0003-00095.jpg", "imgTest/IMG-0003-00094.jpg", "imgTest/IMG-0003-00093.jpg", "imgTest/IMG-0003-00092.jpg", "imgTest/IMG-0003-00091.jpg", "imgTest/IMG-0003-00090.jpg", "imgTest/IMG-0003-00089.jpg", "imgTest/IMG-0003-00088.jpg", "imgTest/IMG-0003-00087.jpg", "imgTest/IMG-0003-00086.jpg", "imgTest/IMG-0003-00085.jpg", "imgTest/IMG-0003-00084.jpg", "imgTest/IMG-0003-00083.jpg", "imgTest/IMG-0003-00082.jpg", "imgTest/IMG-0003-00081.jpg", "imgTest/IMG-0003-00080.jpg", "imgTest/IMG-0003-00079.jpg", "imgTest/IMG-0003-00078.jpg", "imgTest/IMG-0003-00077.jpg", "imgTest/IMG-0003-00076.jpg", "imgTest/IMG-0003-00075.jpg", "imgTest/IMG-0003-00074.jpg", "imgTest/IMG-0003-00073.jpg", "imgTest/IMG-0003-00072.jpg", "imgTest/IMG-0003-00071.jpg", "imgTest/IMG-0003-00070.jpg", "imgTest/IMG-0003-00069.jpg", "imgTest/IMG-0003-00068.jpg", "imgTest/IMG-0003-00067.jpg", "imgTest/IMG-0003-00066.jpg", "imgTest/IMG-0003-00065.jpg", "imgTest/IMG-0003-00064.jpg", "imgTest/IMG-0003-00063.jpg", "imgTest/IMG-0003-00062.jpg", "imgTest/IMG-0003-00061.jpg", "imgTest/IMG-0003-00060.jpg", "imgTest/IMG-0003-00059.jpg", "imgTest/IMG-0003-00058.jpg", "imgTest/IMG-0003-00057.jpg", "imgTest/IMG-0003-00056.jpg", "imgTest/IMG-0003-00055.jpg", "imgTest/IMG-0003-00054.jpg", "imgTest/IMG-0003-00053.jpg", "imgTest/IMG-0003-00052.jpg", "imgTest/IMG-0003-00051.jpg", "imgTest/IMG-0003-00050.jpg", "imgTest/IMG-0003-00049.jpg", "imgTest/IMG-0003-00048.jpg", "imgTest/IMG-0003-00047.jpg", "imgTest/IMG-0003-00046.jpg", "imgTest/IMG-0003-00045.jpg", "imgTest/IMG-0003-00044.jpg", "imgTest/IMG-0003-00043.jpg", "imgTest/IMG-0003-00042.jpg", "imgTest/IMG-0003-00041.jpg", "imgTest/IMG-0003-00040.jpg", "imgTest/IMG-0003-00039.jpg", "imgTest/IMG-0003-00038.jpg", "imgTest/IMG-0003-00037.jpg", "imgTest/IMG-0003-00036.jpg", "imgTest/IMG-0003-00035.jpg", "imgTest/IMG-0003-00034.jpg", "imgTest/IMG-0003-00033.jpg", "imgTest/IMG-0003-00032.jpg", "imgTest/IMG-0003-00031.jpg", "imgTest/IMG-0003-00030.jpg", "imgTest/IMG-0003-00029.jpg", "imgTest/IMG-0003-00028.jpg", "imgTest/IMG-0003-00027.jpg", "imgTest/IMG-0003-00026.jpg", "imgTest/IMG-0003-00025.jpg", "imgTest/IMG-0003-00024.jpg", "imgTest/IMG-0003-00023.jpg", "imgTest/IMG-0003-00022.jpg", "imgTest/IMG-0003-00021.jpg", "imgTest/IMG-0003-00020.jpg", "imgTest/IMG-0003-00019.jpg", "imgTest/IMG-0003-00018.jpg", "imgTest/IMG-0003-00017.jpg", "imgTest/IMG-0003-00016.jpg", "imgTest/IMG-0003-00015.jpg", "imgTest/IMG-0003-00014.jpg", "imgTest/IMG-0003-00013.jpg", "imgTest/IMG-0003-00012.jpg", "imgTest/IMG-0003-00011.jpg", "imgTest/IMG-0003-00010.jpg", "imgTest/IMG-0003-00009.jpg", "imgTest/IMG-0003-00008.jpg", "imgTest/IMG-0003-00007.jpg", "imgTest/IMG-0003-00006.jpg", "imgTest/IMG-0003-00005.jpg", "imgTest/IMG-0003-00004.jpg", "imgTest/IMG-0003-00003.jpg", "imgTest/IMG-0003-00002.jpg", "imgTest/IMG-0003-00001.jpg" ];


let imageElement = document.getElementById("main_Image");
let currentImageIndex = 0;


document.getElementById("main_Block_for_Img").onwheel = function circle(event) {
	
	if (event.deltaY > 0 || currentImageIndex === 0) {
		currentImageIndex += 1;
		if (currentImageIndex === 126){
		currentImageIndex = 0;
	    }
		console.log(currentImageIndex);
		
	}
	else if (event.deltaY < 0) {
		currentImageIndex -= 1;
		if (currentImageIndex === 0){
		currentImageIndex = 125;
	    }
		
	}
	
	imageElement.src = images[currentImageIndex];
	return false;
}


