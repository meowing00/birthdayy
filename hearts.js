const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 80; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 18 + 8,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random()
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => {
    ctx.globalAlpha = h.opacity;
    ctx.font = h.size + "px Arial";
    ctx.fillStyle = "pink";
    ctx.fillText("❤", h.x, h.y);
    h.y -= h.speed;
    if (h.y < -20) {
      h.y = canvas.height + 20;
      h.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(draw);
}

draw();