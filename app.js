window.onload = function () {
	
    //lägg till fler i queryselector
    const dogOne = document.querySelector('.column .dogOne');
    const dogTwo = document.querySelector('.column .dogTwo');
    const dogThree = document.querySelector('.column .dogThree');
   
    dogOne.addEventListener('click', function () {
		
		if (dogOne.classList.contains('dogOneStyle')) {
			dogOne.classList.remove('dogOneStyle');
			console.log("remove class")
		}else{
			dogOne.classList.add('dogOneStyle');
			console.log("add class")  
		} 
    });

    dogTwo.addEventListener('click', function () {
        dogTwo.classList.contains('dogTwoStyle');
      
        if (y === 280) {
            dogTwo.onclick = function () {
                dogTwo.classList.remove('dogTwoStyle');
            }
        }
    });

    dogThree.addEventListener('click', function () {
        dogThree.classList.add('dogThreeStyle');
        const y = 200;

        if (y === 200) {
            dogThree.onclick = function () {
                dogThree.classList.remove('dogThreeStyle');
            }  
        }
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
        if (window.scrollY > 300 && window.scrollY < 800) {
            document.querySelector('.vacation-0 img').style.opacity = '1';
        } else {
            document.querySelector('.vacation-0 img').style.opacity = '0';
        }
        if (window.scrollY > 800 && window.scrollY < 1300) {
            document.querySelector('.vacation-1 img').style.opacity = '1';
        } else {
            document.querySelector('.vacation-1 img').style.opacity = '0';
        }
        if (window.scrollY > 1300 && window.scrollY < 1800) {
            document.querySelector('.vacation-2 img').style.opacity = '1';
            document.querySelector('.the-future').style.display = 'block';
        }
 
        else {
            document.querySelector('.vacation-2 img').style.opacity = '0';
        }
     });
}

window.addEventListener('keypress', function (event) {
		if(event.code == 'Space'){ 
			event.preventDefault();
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}
});
    
const goBack = document.querySelector('.the-future');

goBack.addEventListener('click', function (event) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		
});