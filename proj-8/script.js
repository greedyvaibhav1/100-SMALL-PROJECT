var crsr = document.querySelector(".cursor");
var blr = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (dets) {
  (crsr.style.left = dets.x + "px"), (crsr.style.top = dets.y + "px");
  (blr.style.left = dets.x - 150 + "px"), (blr.style.top = dets.y - 150 + "px");
});
var call = document.querySelectorAll("#nav h4");
console.log(call);
call.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  element.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
   
    start: "top -10%",
    end: "top -11%",

    scrub: 1,
  },
});
gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
   
    start: "top -25% ",
    end: "top -70%",
    scrub: 3,
  },
});
gsap.from(".about-us img ,.in", {
  y: 50,
  opacity: 1,
  duration: 2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",

    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  duration:1,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
   
    start: "top 50%",
    end: "top 40%",
    scrub:4,
           
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
   
    start: "top 50%",
    end: "top 40%",
    scrub:4,
           
  },
});