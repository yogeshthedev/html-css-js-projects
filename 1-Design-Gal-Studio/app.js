gsap.to(".flower", {
    rotate: 90,
    ease: "none",
    duration: 30,
    scrollTrigger: {
        trigger: ".flower",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
});

gsap.from('.view-1', {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.1
})

gsap.to('.view-2 .card-1 .leaf',{
 y:30,
    duration:1,
    delay:0.1,
    scrollTrigger: {
        trigger: ".view-2",
        start: "top 10%",
        end: "bottom top",
        scrub: true,
    },
})


gsap.from('.view-2 .card-2', {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".view-2 .card-2", 
        start: "top 80%", 
        toggleActions: "play none none none",
      }
})

gsap.from('.view-3 .content .bottom', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".view-3 .content .top .botton-txt", 
        start: "top 90%", 
        toggleActions: "play none none none",
      }
})

gsap.from('.view-2 .card-2 .bottom .work',{
    x:20,
    duration:.4,
    delay:0.2,
    stagger:0.2,
    opacity:0,
    scrollTrigger:{
        trigger:'.view-2 .card-2 .bottom .work',
        start:'top 90%',
        toggleActions:'play none none none',
        scrub:true
    }
})