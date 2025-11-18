// 平滑滚动
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 自定义鼠标
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Hero 动画
gsap.from(".hero-title span", {
  y: 120,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});

// 滚动淡入动画
gsap.utils.toArray(".fade-in").forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
  });
});
