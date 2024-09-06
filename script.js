console.clear();

const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

canvas.width = 1800;
canvas.height = 1200;

if (window.innerWidth / window. innerHeight < canvas.width/canvas.height)
  canvas.style.maxHeight = '100vh';
else
  canvas.style.maxWidth = '100vw';

const frameCount = 240;
const currentFrame = index => (
  `imgs/tinified/hex-hex-2-${(index+1).toString()}.jpg`
);


const images = []
const sequencer = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(sequencer, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[90].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[sequencer.frame], 0, 0); 
}