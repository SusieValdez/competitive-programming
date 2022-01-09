"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function constructTeamIndexes(attendees) {
  const teams = [];
  for (let i = 0; i < attendees.length; i++) {
    for (let j = i + 1; j < attendees.length; j++) {
      teams.push([i, j]);
    }
  }
  return teams;
}

function zip(...arrs) {
  return arrs[0].map((_, i) => arrs.map((arr) => arr[i]));
}

function evaluateTeam(team) {
  const subjectLists = team.map((a) => a.split(""));
  const zippedSubjectLists = zip(...subjectLists);
  let numSubjectsKnown = 0;
  for (const teamSubjectKnownStatus of zippedSubjectLists) {
    if (teamSubjectKnownStatus.some((status) => status === "1")) {
      numSubjectsKnown++;
    }
  }
  return numSubjectsKnown;
}

function acmTeam(attendees) {
  const teamsOfAttendeeIndexes = constructTeamIndexes(attendees); // return indexes for performance reasons
  const teams = teamsOfAttendeeIndexes.map((indexes) =>
    indexes.map((i) => attendees[i])
  );
  let maxSubjectsKnown = 0;
  let numberOfTeamsWhoKnowMaxSubjects = 0;
  for (const team of teams) {
    const numSubjectsKnown = evaluateTeam(team);
    if (numSubjectsKnown > maxSubjectsKnown) {
      maxSubjectsKnown = numSubjectsKnown;
      numberOfTeamsWhoKnowMaxSubjects = 1;
    } else if (numSubjectsKnown === maxSubjectsKnown) {
      numberOfTeamsWhoKnowMaxSubjects++;
    }
  }
  return [maxSubjectsKnown, numberOfTeamsWhoKnowMaxSubjects];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
  const n = parseInt(firstMultipleInput[0], 10);
  const m = parseInt(firstMultipleInput[1], 10);
  let topic = [];
  for (let i = 0; i < n; i++) {
    const topicItem = readLine();
    topic.push(topicItem);
  }
  const result = acmTeam(topic);
  ws.write(result.join("\n") + "\n");
  ws.end();
}
