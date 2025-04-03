// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1
// })
// gsap.from("#box2",{
//     x:1200,
//     duration:2,
//     delay:1
// })
// gsap.to("#box3",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360
// })
// let tl=gsap.timeline()
// tl.to("#box1",{
//     x:1200,
//     rotate:360,
//     duration:2,
//     delay:1
// })
// tl.from("#box2",{
//     x:1200,
//     rotate:360,
//     duration:2,
    
// })
// tl.to("#box3",{
//     x:1200,
//     rotate:360,
//     duration:2,
//     borderRadius:"50%"
// })
// tl.from("h2",{
//     y:-20,
//     duration:1,
//     delay:1,
//     opacity:0
// })
// tl.from("h3",{
//     y:-20,
//     duration:1,
//     stagger:0.3,
//     opacity:0
// })
// tl.from("h1",{
//     scale:0.2,
//     duration:1,
    
//     opacity:0
// })
gsap.from("#page1 .box",{
    opacity:0,
    rotate:360,
    duration:2,
    delay:1
})
gsap.to("#page2 h1",{
    transform:"translateX(-120%)",
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin :true
    }
})
var path=`M 10 300 Q 700 300 1450 300`
var finalpath=`M 10 300 Q 700 300 1450 300`
var page=document.querySelector("#page3")
page.addEventListener("mousemove",function(gets){
    //console.log(gets.y);
    path=`M 10 300 Q ${gets.x} ${gets.y} 1450 300`
    gsap.to("#page3 svg path",{
        attr:{d:path},
        duration:0.2
    })
})
page.addEventListener("mouseleave",function(gets){
    
    
    gsap.to("#page3 svg path",{
        attr:{d:finalpath},
        duration:1.5,
        ease: "elastic.out(1,0.1)",
    })
})
//page4

var h1=document.querySelector("#page4 h1")
var h1t=h1.textContent


var splith1=h1t.split("")
var haf=Math.floor(splith1.length/2)
console.log(haf);
var clutter=""
splith1.forEach(function(el,indx){
    if(indx<haf){
        clutter+=`<span class="a">${el}</span>`
    }
    else{
        clutter+=`<span class="b">${el}</span>`
    }
    
   
})
h1.innerHTML=clutter
gsap.from("#page4 h1 .a",{

    y:80,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.3
})
gsap.from("#page4 h1 .b",{

    y:80,
    duration:1,
    delay:1,
    opacity:0,
    stagger:-0.3
})

