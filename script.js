// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// Animate .sinchu on load
gsap.fromTo(
  ".sinchu",
  { opacity: 0, rotation: 0 },
  { opacity: 0.7, rotation: -30, duration: 2 }
);

// Animate .sinchu1 on scroll
gsap.fromTo(
  ".sinchu1",
  { opacity: 0, rotation: 0 },
  {
    opacity: 0.9,
    rotation: 3600,
    duration: 4,
    scrollTrigger: {
      trigger: ".sinchu1",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      // markers: true
    }
  }
);

// (Optional) Animate .title on scroll – Uncomment if needed
// gsap.fromTo(
//   ".title",
//   { opacity: 0, x: 0, y: 0 },
//   {
//     opacity: 0.5,
//     x: 100,
//     y: -30,
//     duration: 3,
//     scrollTrigger: {
//       trigger: ".title",
//       start: "top 80%",
//       end: "bottom top",
//       scrub: true,
//       markers: true
//     }
//   }
// );
