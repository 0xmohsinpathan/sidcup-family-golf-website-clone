gsap.to("nav", {
    backgroundColor: "#000",
    height: "104px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -8%",
        scrub: .8
    }
})
var cursor = document.querySelector(".cursor")
var cursorShadow = document.querySelector(".cursor-shadow")

document.addEventListener("mousemove", function (mousePostion) {
    cursorShadow.style.left = mousePostion.x - 200 + "px"
    cursorShadow.style.top = mousePostion.y - 200 + "px"

    cursor.style.left = mousePostion.x - 10 + "px"
    cursor.style.top = mousePostion.y + -10 + "px"
})

gsap.to("main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 1
    }
})