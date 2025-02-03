var page = document.querySelector('#page1');
var h1 = document.querySelector('h1')

var h1Dimention = h1.getBoundingClientRect()

var h1CenterX = h1Dimention.width/2 + h1Dimention.left
var h1CenterY = h1Dimention.height/2 + h1Dimention.top

var xval=0;
var yval=0;

page.addEventListener("mousemove",function(dets){
    xval=(dets.x - h1CenterX)/20
    yval=-(dets.y - h1CenterY)/20
    h1.style.transform=`translateY(1%) rotateY(${xval}deg) rotateX(${yval}deg)`
})
