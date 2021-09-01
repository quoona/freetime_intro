const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 2 }, "-=1.5");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.5 });
tl.fromTo(
  ".big-text",
  { opacity: 0 },
  { opacity: 0.9, duration: 1.5 },
  "-=1.5"
);
tl.fromTo(".psb", { opacity: 0 }, { opacity: 0.9, duration: 2, delay: 2 });

//jesus i dunno know what im writing right now :(
const music = new Audio("lovely.mp3");
function play() {
  if (musichouse.play() && musictree.play()) {
    musichouse.pause();
    musictree.pause();
  }
  music.play();
}
const musictree = new Audio("valley.mp3");
function playmusictree() {
  if (music.play() && musichouse.play()) {
    music.pause();
    musichouse.pause();
  }
  musictree.play();
}
const musichouse = new Audio("voyage.mp3");
function playmusichouse() {
  if (music.play() && musictree.play()) {
    music.pause();
    musictree.pause();
  }
  musichouse.play();
}
