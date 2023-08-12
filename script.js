gsap.to("nav",{
    backgroundColor: "#000",
    height:"104px",
    duration:0.5,
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        markers:true,
        start:"top -8%",
        scrub: .8
    }
})