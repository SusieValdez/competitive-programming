import fs from "fs";

const statsPath = "docs/stats.json";
const solutionsPath = "solutions";

const stats = {};
fs.readdirSync(solutionsPath).forEach((websiteDir) => {
  stats[websiteDir] = {
    total: 0,
    sections: {},
  };
  fs.readdirSync(`${solutionsPath}/${websiteDir}`).forEach((sectionDir) => {
    const files = fs.readdirSync(
      `${solutionsPath}/${websiteDir}/${sectionDir}`
    );
    stats[websiteDir].total += files.length;
    stats[websiteDir].sections[sectionDir] = files.length;
  });
});

fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2) + "\n");
