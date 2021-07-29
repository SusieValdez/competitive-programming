import fs from "fs";

const statsPath = "docs/stats.json";

const stats = JSON.parse(fs.readFileSync(statsPath));

const newStats = {};
Object.keys(stats).forEach((website) => {
  const numFiles = fs.readdirSync(website).length;
  newStats[website] = numFiles;
});

fs.writeFileSync(statsPath, JSON.stringify(newStats, null, 2) + "\n");
