const canvas2 = document.getElementById("glitterCanvas");
const ctx2 = canvas2.getContext("2d");

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

let sparkles = [];

for (let i = 0; i < 100; i++) {
  sparkles.push({
    x: Math.random() * canvas2.width,
    y: Math.random() * canvas2.height,
    r: Math.random() * 2 + 1,
    d: Math.random() * 1
  });
}

function sparkle() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx2.fillStyle = "rgba(255,192,203,0.8)";
  sparkles.forEach(s => {
    ctx2.beginPath();
    ctx2.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx2.fill();
    s.y += s.d;
    if (s.y > canvas2.height) {
      s.y = 0;
      s.x = Math.random() * canvas2.width;
    }
  });
  requestAnimationFrame(sparkle);
}

sparkle();