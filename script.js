// Confetti using canvas
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createConfettiParticle() {
  const colors = ['#ff4081', '#ffd700', '#40c4ff', '#69f0ae', '#fff59d'];
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 5 + 2,
    swing: Math.random() * 2
  };
}

function launchConfetti() {
  for (let i = 0; i < 150; i++) {
    particles.push(createConfettiParticle());
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.y += p.speed;
    p.x += Math.sin(p.y * 0.05) * p.swing;

    if (p.y > canvas.height) {
      particles.splice(i, 1);
    }
  });
  requestAnimationFrame(drawParticles);
}

drawParticles();
