export function setupCounter() {
  let count = 0;

  const countEl = document.getElementById("count");
  const btnReset = document.getElementById("reset");
  const btnMinus = document.getElementById("minus");
  const btnPlus  = document.getElementById("plus");

  function render() {
    countEl.textContent = String(count);
  }

  btnReset.addEventListener("click", () => { count = 0; render(); });
  btnMinus.addEventListener("click", () => { count -= 1; render(); });
  btnPlus.addEventListener("click",  () => { count += 1; render(); });

  // Optional keyboard shortcuts
  window.addEventListener("keydown", (e) => {
    if (e.key === "+" || (e.key === "=" && e.shiftKey)) { count += 1; render(); }
    if (e.key === "-") { count -= 1; render(); }
  });

  render();
}
