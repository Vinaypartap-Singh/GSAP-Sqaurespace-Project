const tl = gsap.timeline();

tl.from("#navLogo img, #navLinkUl li, #navButtons button", {
  y: -100,
  duration: 0.5,
  stagger: 0.2,
});

tl.from("#page1Content h1", {
  opacity: 0,
  y: 100,
  stagger: 0.3,
});
