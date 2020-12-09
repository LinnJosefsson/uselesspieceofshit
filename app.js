


window.onload = function () {
	
    //lägg till fler i queryselector
    var dogOne = document.querySelector('.column .dogOne');
    var dogTwo = document.querySelector('.column .dogTwo');
    var dogThree = document.querySelector('.column .dogThree');
        

    dogOne.addEventListener("mouseover", nameOnMouseOver);
    function nameOnMouseOver() {
        document.textContent =
            'Maia med tillhörande boll';
        
    }

    //gör function av detta
    dogOne.addEventListener('click', function () {
      
        var y = 220;
        dogOne.style.marginTop = y + 'px';
	
        dogOne.style.position = 'fixed';
        dogOne.style.width = '300' + 'px';
        dogOne.style.transform = 'translateX(30%)';
        dogOne.style.transition = 'width 2s';
        
        if (y === 220) {
            dogOne.onclick = function () {
                dogOne.style.position = 'absolute';
                dogOne.style.marginTop = 0;
                dogOne.style.width = '120' + 'px';
            }
        }

        var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (viewportWidth > 640) {
            dogOne.style.transform = 'translateX(100%)';

        }
        
        
		
        // css left: 40%; transform: translateX(-40%)
    });

    dogTwo.addEventListener('click', function () {
        var y = 280;
        var x = 0;
        dogTwo.style.marginTop = y + 'px';
        dogTwo.style.position = 'fixed';
        dogTwo.style.width = '280' + 'px';
        dogTwo.style.transition = 'width 2s';
        
        if (y === 280) {
            dogTwo.onclick = function () {
                dogTwo.style.position = 'absolute';
                dogTwo.style.marginTop = x + 'px';
                dogTwo.style.marginLeft = x + 'px';
                dogTwo.style.width = '120' + 'px';
            }
        }
		
        // css left: 50%; transform: translateX(-50%)

    });

    dogThree.addEventListener('click', function () {
        /* var x = 10; */
        var y = 240;
        var x = 0;
        dogThree.style.marginTop = y + 'px';
        dogThree.style.position = 'fixed';
        dogThree.style.width = '200' + 'px';
        dogThree.style.transform = 'translateX(-50%)';
        dogThree.style.transition = 'width 2s';

        
        if (y === 240) {
            dogThree.onclick = function () {
                dogThree.style.position = 'absolute';
                dogThree.style.marginTop = '0';
                dogThree.style.width = '120' + 'px';


                        
            }

            
        }
    });
        
    
    
        
	
	

    var bgImg = [
        "img/mooniebig.jpg",
        "img/berlin.jpg",
        "img/hiroshimabig.jpeg",
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
			
			
    window.addEventListener("scroll", function (e) {
		
        // Scrollar upp? -> göm bilder
        // Scrollar förbi första bilder - göm den, visa nästa

        if (window.scrollY > 500 && window.scrollY < 1500) {
            document.querySelector('.vacation-0 img').style.display = 'block';
        } else {
            document.querySelector('.vacation-0 img').style.display = 'none';
        }
        if (window.scrollY > 1500 && window.scrollY < 2000) {
            document.querySelector('.vacation-1 img').style.display = 'block';
        } else {
            document.querySelector('.vacation-1 img').style.display = 'none';
        }
        if (window.scrollY > 2000 && window.scrollY < 3000) {
            document.querySelector('.vacation-2 img').style.display = 'block';
        }

        
        
        
        else {
            document.querySelector('.vacation-2 img').style.display = 'none';
        }
        /*   if (window.scrollY < 100) {
              document.querySelector('.vacation-1 img').style.display = 'none';
          } */
      
    });
	
	
  	window.addEventListener('keypress', function (event) {
		if(event.keyCode == 32){ // space
			event.preventDefault();
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}
	});
}

        
/* window.addEventListener("scroll", function (e) {
    if (window.scrollY === 2000) {
        const goBack = document.querySelector('.the-future h2')
        goBack.textContent = 'Want to go back to the future? Hit your Space-key';
            
    }
}); */



   
    /*  const goBack = document.querySelector('section .the-future h2')
    goBack.textContent = 'Want to go back to the future? Hit your Space-key'; */
