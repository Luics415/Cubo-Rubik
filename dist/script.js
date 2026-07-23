// Lógica del Cubo Rubik 3D y Temporizador
const rubikCube = document.getElementById('rubikCube');
const timerDisplay = document.getElementById('timer');
const btnScramble = document.getElementById('btnScramble');
const btnResetTimer = document.getElementById('btnResetTimer');

// Temporizador de resolución
let timerInterval = null;
let startTime = 0;
let elapsedTime = 0;
let timerRunning = false;

function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
  }
}

function stopTimer() {
  if (timerRunning) {
    timerRunning = false;
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  timerDisplay.textContent = "00:00.00";
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  const totalMs = elapsedTime;
  const ms = Math.floor((totalMs % 1000) / 10);
  const seconds = Math.floor((totalMs / 1000) % 60);
  const minutes = Math.floor((totalMs / (1000 * 60)) % 60);

  timerDisplay.textContent = 
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(ms).padStart(2, '0')}`;
}

// Construcción del Cubo 3x3x3 (27 cubies)
const OFFSET = 56; // Distancia de separación entre centros

function createRubik() {
  rubikCube.innerHTML = '';
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        const cubie = document.createElement('div');
        cubie.className = 'cubie';
        cubie.style.transform = `translate3d(${x * OFFSET}px, ${-y * OFFSET}px, ${z * OFFSET}px)`;

        // Caras con la paleta de colores estándar
        const faces = [
          { name: 'face-u', colorClass: y === 1 ? 'U' : '' },
          { name: 'face-d', colorClass: y === -1 ? 'D' : '' },
          { name: 'face-f', colorClass: z === 1 ? 'F' : '' },
          { name: 'face-b', colorClass: z === -1 ? 'B' : '' },
          { name: 'face-l', colorClass: x === -1 ? 'L' : '' },
          { name: 'face-r', colorClass: x === 1 ? 'R' : '' }
        ];

        faces.forEach(f => {
          const faceEl = document.createElement('div');
          faceEl.className = `face ${f.name} ${f.colorClass}`;
          cubie.appendChild(faceEl);
        });

        rubikCube.appendChild(cubie);
      }
    }
  }
}

createRubik();

// Rotación del cubo mediante arrastre (Drag)
let isDragging = false;
let prevMouse = { x: 0, y: 0 };
let rotX = -25;
let rotY = -35;

window.addEventListener('mousedown', (e) => {
  if (e.target.closest('.controls') || e.target.closest('.header')) return;
  isDragging = true;
  prevMouse = { x: e.clientX, y: e.clientY };
  
  // Inicia el cronómetro al interactuar por primera vez
  if (!timerRunning && elapsedTime === 0) {
    startTimer();
  }
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - prevMouse.x;
  const deltaY = e.clientY - prevMouse.y;

  rotY += deltaX * 0.5;
  rotX -= deltaY * 0.5;

  rubikCube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  prevMouse = { x: e.clientX, y: e.clientY };
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

// Botones de control
btnScramble.addEventListener('click', () => {
  resetTimer();
  let turns = 0;
  const interval = setInterval(() => {
    rotY += (Math.random() - 0.5) * 60;
    rotX += (Math.random() - 0.5) * 60;
    rubikCube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    turns++;
    if (turns >= 10) clearInterval(interval);
  }, 50);
});

btnResetTimer.addEventListener('click', resetTimer);