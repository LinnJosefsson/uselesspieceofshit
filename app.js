/* const dog = document.querySelector('img');

dog.addEventListener('click', function (e){
    e.style.marginTop = '300px';
})


 */

/*
 var dogOne = document.querySelector('.column .dogOne');
var dogTwo = document.querySelector('.column .dogTwo');
var dogThree = document.querySelector('.column .dogThree');


dogOne.onclick = function(){
    
  var x = 100;
  var y = 300;
  dogOne.style.marginLeft = x + 'px';
    dogOne.style.marginTop = y + 'px';
    dogOne.style.position = 'fixed';
};

dogTwo.onclick = function () {
    var x = 0;
    var y = 300;
    dogTwo.style.marginLeft = x + 'px';
    dogTwo.style.marginTop = y + 'px';
    dogTwo.style.position = 'fixed';

};

dogThree.onclick = function () {
    var x = 550;
    var y = 300;
    dogThree.style.marginRight = x + 'px';
    dogThree.style.marginTop = y + 'px';
    dogThree.style.position = 'fixed';
};



window.onload = function () {
    window.onload.addEventListener('scroll', function () {


        if (window.scrollY > 100) {
            document.querySelector('.vacation').style.display = block;
            
        }
        if (window.scrollY > 600) {
            document.querySelector('.vacation2').style.display = block;
        }
        if (window.scrollY > 1200) {
            document.querySelector('vacation3').style.display = block;
        }
    


        var bgImg = [
            "/img/moon.jpg",
            "/img/berlin.jpg",
            "/img/beijing.jpg",
        ];

        var i = 0;

        for (i = 0; i < bgImg.length; i++) {
            
            showImg() = function () {
                var img = document.createElement('img');
                img.src = bgImg[i];
                img.classList.add('.vacation');
                document.body.appendChild(img);

            }
    
        }
    }
}

*/  

    window.onload = function () {
	
	//lägg till fler i queryselector
	var dogOne = document.querySelector('.column .dogOne');
	var dogTwo = document.querySelector('.column .dogTwo');
	var dogThree = document.querySelector('.column .dogThree');

	//gör function av detta
	dogOne.onclick = function(){
		
	  var x = 100;
	  var y = 300;
	  dogOne.style.marginLeft = x + 'px';
		dogOne.style.marginTop = y + 'px';
		dogOne.style.position = 'fixed';
		
		// css left: 40%; transform: translateX(-40%)
	};

	dogTwo.onclick = function () {
		var x = 0;
		var y = 300;
		dogTwo.style.marginLeft = x + 'px';
		dogTwo.style.marginTop = y + 'px';
		dogTwo.style.position = 'fixed';
		
		// css left: 50%; transform: translateX(-50%)

	};

	dogThree.onclick = function () {
		var x = 550;
		var y = 300;
		dogThree.style.marginLeft = 'auto';
		dogThree.style.marginRight = x + 'px';
		dogThree.style.marginTop = y + 'px';
		dogThree.style.position = 'fixed';
		
		// css left: 60%; transform: translateX(-60%)
	};
	
	

	var bgImg = [
		"img/moon.jpg",
		"img/berlin.jpg",
		"img/beijing.jpg",
	];

	var i = 0;

	for (i = 0; i < bgImg.length; i++) {
		var div = document.createElement('section');
		div.classList.add('vacay', 'vacation-' + i);
		var img = document.createElement('img');
		img.src = bgImg[i];
		div.appendChild(img);
		document.body.appendChild(div);
	}
			
			
	window.addEventListener("scroll", function(e) {
		
		// Scrollar upp? -> göm bilder
		// Scrollar förbi första bilder - göm den, visa nästa

        if (window.scrollY > 500) {
            document.querySelector('.vacation-0 img').style.display = 'block';
        }else{
			document.querySelector('.vacation-0 img').style.display = 'none';
		}
        if (window.scrollY > 1500) {
            document.querySelector('.vacation-1 img').style.display = 'block';
        } else {
            document.querySelector('.vacation-2 img').style.display = 'none';
        }
        if (window.scrollY > 2000) {
            document.querySelector('.vacation-2 img').style.display = 'block';
        } else {
            document.querySelector('.vacation-2 img').style.display = 'none';
        }
        if (window.scrollY < 200) {
            document.querySelector('.vacation-1 img').style.display = 'none';
        }
    

	});

}

