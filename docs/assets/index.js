function getRandomColor() {
  const hex = "0123456789ABCDEF";
  let output = "";
  for (let i = 0; i < 6; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return "#" + output;
}

function progress(elem, amount, total) {
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= amount) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = (width / total) * 100 + "%";
    }
  }
}

function createProgreessBar(amount) {
  const progressEl = document.createElement("div");
  progressEl.classList.add("progress");
  progressEl.style["background-color"] = getRandomColor();
  // Pick 100 as arbitrary goal for each website
  progress(progressEl, amount, 100);
  return progressEl;
}

function formatHeader(headerStr) {
  return headerStr
    .split("-")
    .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
    .join(" ");
}

const barsEl = document.getElementById("bars");
async function main() {
  const stats = await fetch("stats.json").then((res) => res.json());
  Object.entries(stats).forEach(([websiteName, { sections }]) => {
    const barHeader = document.createElement("h3");
    barHeader.innerText = `${formatHeader(websiteName)} xp`;
    const barEl = document.createElement("div");
    barEl.classList.add("bar");
    Object.entries(sections).forEach(([sectionName, amount]) => {
      const progressEl = createProgreessBar(amount);
      progressEl.onclick = () => {
        document.location = `https://github.com/SusieHatter/competitive-programming/tree/main/solutions/${websiteName}/${sectionName}`;
      };
      barEl.appendChild(progressEl);
    });
    barsEl.appendChild(barHeader);
    barsEl.appendChild(barEl);
  });
}

main();
