const tl = gsap.timeline();

tl.from("#navLogo img, #navLinkUl li, #navButtons button", {
  y: -100,
  duration: 0.5,
  stagger: 0.2,
});

tl.from("#page1Content h1, #page1Content img", {
  opacity: 0,
  y: 100,
  stagger: 0.3,
});

tl.from("#page1Content h5", {
  opacity: 0,
  y: 40,
  stagger: 0.3,
  repeat: -1,
  yoyo: true,
  duration: 0.8,
});
