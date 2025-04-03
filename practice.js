var icon =document.querySelector("nav i")
var box =document.querySelector(".box")
var cross=document.querySelector(".box i")
var tl=gsap.timeline()
tl.to(".box",{
    right:0,
    duration:1
})
tl.from(".box h1",{
    x:100,
    duration:1,
    stagger:0.3,
    opacity:0
})
tl.from(".box i",{
    opacity:0
})
tl.pause()
icon.addEventListener("click",function(){
tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
    })
var body=document.querySelector("#main")
body.addEventListener("mousemove",function(data){
console.log(data.x);
gsap.to(".mouse",{
    x:data.x,
    y:data.y
})
})