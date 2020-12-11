


window.onload = function () {
	
    //lägg till fler i queryselector
    const dogOne = document.querySelector('.column .dogOne');
    const dogTwo = document.querySelector('.column .dogTwo');
    const dogThree = document.querySelector('.column .dogThree');
   
     


        
    

    //gör function av detta
    dogOne.addEventListener('click', function () {
        const y = 220;
        

        dogOne.classList.add('dogOneStyle');
    
       
    
        if (y === 220) {
            dogOne.onclick = function () {
                
                dogOne.classList.remove('dogOneStyle');
                
              
            }
        }

    
    });

    dogTwo.addEventListener('click', function () {
        const y = 280;
        const x = 0;
        dogTwo.classList.add('dogTwoStyle');
      
        
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
		
})