const screens = [...document.querySelectorAll("[data-screen]")];
const goalInput = document.querySelector("#goal-input");
const timerValue = document.querySelector("#timer-value");
const breakMinutes = document.querySelector("#break-minutes");
const pauseButton = document.querySelector("#pause-button");
let remaining = 1476;
let timerId;
let paused = false;

const formatTime = (seconds) =>
  `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

function showScreen(name) {
  screens.forEach((screen) => {
    const active = screen.dataset.screen === name;
    screen.hidden = !active;
    screen.classList.toggle("is-active", active);
  });
  document.querySelector(`[data-screen="${name}"] h1`)?.focus({ preventScroll: true });
}

function updateGoal() {
  const goal = goalInput.value.trim() || "오늘의 집중 목표";
  document.querySelectorAll("[data-goal-text]").forEach((element) => {
    element.textContent = goal;
  });
}

function renderTimer() {
  timerValue.textContent = formatTime(remaining);
  breakMinutes.textContent = `${Math.ceil(remaining / 60)}분`;
}

function startTimer() {
  clearInterval(timerId);
  remaining = Number(document.querySelector("[data-routine].is-selected").dataset.seconds);
  paused = false;
  pauseButton.innerHTML = '<span aria-hidden="true">Ⅱ</span> 일시정지';
  renderTimer();
  timerId = setInterval(() => {
    if (!paused && remaining > 0) {
      remaining -= 1;
      renderTimer();
    }
  }, 1000);
}

document.addEventListener("click", (event) => {
  const clear = event.target.closest(".clear-button");
  const quick = event.target.closest("[data-quick]");
  const routine = event.target.closest("[data-routine]");
  const navigation = event.target.closest("[data-go]");

  if (clear) {
    goalInput.value = "";
    goalInput.focus();
  }

  if (quick) {
    document.querySelectorAll("[data-quick]").forEach((button) => button.classList.remove("is-selected"));
    quick.classList.add("is-selected");
    goalInput.value = `${quick.dataset.quick} 집중하기`;
  }

  if (routine) {
    document.querySelectorAll("[data-routine]").forEach((card) => {
      const selected = card === routine;
      card.classList.toggle("is-selected", selected);
      card.setAttribute("aria-checked", selected);
      card.querySelector(".radio-mark").textContent = selected ? "✓" : "";
    });
  }

  if (navigation) {
    const destination = navigation.dataset.go;
    if (destination === "routine") updateGoal();
    if (destination === "timer") startTimer();
    if (destination === "goal") clearInterval(timerId);
    showScreen(destination);
  }
});

pauseButton.addEventListener("click", () => {
  paused = !paused;
  pauseButton.innerHTML = paused
    ? '<span aria-hidden="true">▶</span> 계속하기'
    : '<span aria-hidden="true">Ⅱ</span> 일시정지';
});

console.assert(formatTime(1476) === "24:36" && screens.length === 3, "FocusFlow self-check failed");
