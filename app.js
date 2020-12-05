/* const dog = document.querySelector('img');

dog.addEventListener('click', function (e){
    e.style.marginTop = '300px';
})


 */

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




bgImg = [
    "url(/img/moon.jpg)",
    "url(/img/berlin.jpg)",
    "url(/img/beijing.jpg)",
];



window.addEventListener('scroll', () => {
    
        if(window.scrollY > 700) {
            document.body.style.backgroundImage = bgImg[0];
            
        }
    if (window.scrollY > 600) {
            document.body.style.backgroundImage = bgImg[1];
        }
        if (window.scrollY > 800) {
            document.body.style.backgroundImage = bgImg[2];
            
        }
    
       

});
