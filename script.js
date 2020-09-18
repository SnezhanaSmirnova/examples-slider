let mySlider = document.createElement('div');
mySlider.className = 'my-slider';
document.body.append(mySlider);
mySlider.innerHTML = '<img id = "slide-img" class = "slide-img">';

let prevBtn = document.createElement('div');
prevBtn.className = 'prev-button';
prevBtn.innerHTML = '<';
mySlider.append(prevBtn);


let nextBtn = document.createElement('div');
nextBtn.className = 'next-button';
nextBtn.innerHTML = '>'
mySlider.append(nextBtn);



let slideImage = document.getElementById('slide-img');
let imagesArray = [];
imagesArray.push('images/1.jpg');
imagesArray.push('images/2.jpg');
imagesArray.push('images/3.jpg');
imagesArray.push('images/4.jpg');
imagesArray.push('images/5.jpg');
imagesArray.push('images/6.jpg');
imagesArray.push('images/7.jpg');
imagesArray.push('images/8.jpg');
imagesArray.push('images/9.jpg');
imagesArray.push('images/10.jpg');

let currentIndex = 1;


let slideBar = document.createElement('div');
slideBar.className = 'slide-bar';
document.body.append(slideBar);
for(let i=0; i < imagesArray.length; i++){
    slideBar.innerHTML += '<div class = "small-img active"></div>';
}
let smallImage = document.getElementsByClassName('small-img');

let smallImageClassName = ['img1', 'img2', 'img3','img4','img5','img6','img7','img8','img9','img10'];
for(let i=0; i< smallImage.length; i++){
    smallImage[i].classList.add(smallImageClassName[i]);
}

showSlides(currentIndex);
function showSlides(n){
    if(n<0){
        currentIndex = imagesArray.length-1;
    }
    else if(n > imagesArray.length-1){
        currentIndex = 0;
    }
    for(let i = 0; i< imagesArray.length; i++){
        slideImage.src = imagesArray[currentIndex-1];
    }
    for(let i = 0; i< smallImage.length; i++){
        smallImage[i].classList.remove('active');
    }
    slideImage.src = imagesArray[currentIndex];
    smallImage[currentIndex].classList.add('active');
}

function plusSlides(n){
    showSlides(currentIndex +=n);
}
function currentSlide(n){
    showSlides(currentIndex = n);
}
prevBtn.onclick = function (){
    plusSlides(-1);
} 
nextBtn.onclick = function (){
    plusSlides(1);
}
slideBar.onclick = function(e){
    for(let i = 0; i< smallImage.length+1; i++){
        if(e.target.classList.contains('small-img') && e.target == smallImage[i-1]){
            currentSlide(i-1);
        }
    }
}