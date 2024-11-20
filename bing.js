gsap.registerPlugin(ScrollTrigger)
let tl1 = gsap.timeline()
tl1.from(".bag1",{yPercent:100, duration:2}, {rotateY:360, duration:2})
tl1.from(".txt",{x:50, duration:2})
tl1.from(".txt",{opacity:0, duration:2}, 2)


let tl2 = gsap.timeline({
	scrollTrigger:{
		trigger:".section2",
		start:"top center"
	},
})

tl2.from(".txt1",{x:-1100, duration:2})
tl2.from(".s2txt1",{y:-50, opacity:0, duration:2,})
tl2.from(".article",{scaleY:0, duration:2})
tl2.from(".article-content",{opacity:0, duration:2})

let tl3 = gsap.timeline({
	scrollTrigger:{
		trigger:".section3",
		start:"top center"
	},
})

tl3.from(".txt2",{yPercent:-50 ,opacity:0 ,duration:2})
tl3.from(".img1",{xPercent:20 ,opacity:0 ,stagger:0.5 ,duration:2})
tl3.from(".img2",{xPercent:-20 ,opacity:0 ,stagger:0.5 ,duration:3})
tl3.from(".img3",{xPercent:20 ,opacity:0 ,stagger:0.5 ,duration:4})




let openMenuIcon = document.querySelector('.bar-icon')
let closeMenuIcon = document.querySelector('.times-icon')
let miniMenu = document.querySelector('.nav-link')

openMenuIcon.addEventListener("click", () =>{
	miniMenu.classList.add('show')
})


closeMenuIcon.addEventListener("click", () =>{
	miniMenu.classList.remove('show')
})













