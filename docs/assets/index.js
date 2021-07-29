const progressEls = {
  "project-euler": document.getElementById("project-euler"),
  "leet-code": document.getElementById("leet-code"),
  "hacker-rank": document.getElementById("hacker-rank"),
};

function progress(elem, amount) {
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= amount) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

async function main() {
  const stats = await fetch("stats.json").then((res) => res.json());
  const progressNames = Object.keys(stats);
  for (let i = 0; i < progressNames.length; i++) {
    const name = progressNames[i];
    const barEl = progressEls[name];
    const progressEl = barEl.firstElementChild;
    const amount = stats[name];
    progress(progressEl, amount);
  }
}

main();
