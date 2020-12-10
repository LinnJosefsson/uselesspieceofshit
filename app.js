


window.onload = function () {
	
    //lägg till fler i queryselector
    const dogOne = document.querySelector('.column .dogOne');
    const dogTwo = document.querySelector('.column .dogTwo');
    const dogThree = document.querySelector('.column .dogThree');
     


        
    

    //gör function av detta
    dogOne.addEventListener('click', function () {
      
        const y = 220;
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

        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (viewportWidth > 640) {
            dogOne.style.transform = 'translateX(110%)';
        }
        if (viewportWidth < 639) 
            dogOne.style.transform = 'translateX(30%)';
        

    });

    dogTwo.addEventListener('click', function () {
        const y = 280;
        const x = 0;
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

    });

    dogThree.addEventListener('click', function () {
        
        const y = 240;
        const x = 0;
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

        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (viewportWidth > 640) {
            dogThree.style.transform = 'translateX(-150%)';
        }
        if (viewportWidth < 639) 
            dogThree.style.transform = 'translateX(-50%)';
    });
        

    const bgImg = [
        "img/mooniebig.jpg",
        "img/berlin.jpg",
        "img/hiroshimabig.jpeg",
    ];

        
    var i = 0;

    for (i = 0; i < bgImg.length; i++) {
        const div = document.createElement('section');
        div.classList.add('vacay', 'vacation-' + i);
        const img = document.createElement('img');
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
     
      
    });
	
}

window.addEventListener('keypress', function (event) {
    console.log(event.code);
		if(event.code == 'Space'){ // space
			event.preventDefault();
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}
	});
        
