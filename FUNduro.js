const pointsKey = [
  0, 400, 350, 320, 300, 290, 280, 270, 260, 250, 240, 230, 220, 210, 200, 190,
  180, 170, 160, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90,
  85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 3, 1,
];

const racesToCount = 4;

class Racer {
  constructor(name, team, category, results, totalPoints) {
    this.name = name;
    this.team = team;
    this.category = category;
    this.results = results;
    this.totalPoints = 0;
  }

  calculateRacePoints() {
    let points = 0;
    for (let i = 0; i < this.results.length; i++) {
      points = pointsKey[this.results[i]];
      this.totalPoints += points;
    }
  }

  getSeriesPoints() {
    let racesToDrop = this.results.length - racesToCount;
    for (let i = racesToDrop; i > 0; i--) {
      var max = Math.max(...this.results);
      const index = this.results.indexOf(max);
      this.results.splice(index, 1);
    }
    this.calculateRacePoints();
  }
}

let racer1 = new Racer(
  "Mike Whaley",
  "Nocterra Trek",
  "Expert 35+",
  [3, 2, 1, 2, 3, 2]
);

let racer2 = new Racer("Doug Garafolo", "", "Expert 35+", [1, 4, 4]);

let racer3 = new Racer(
  "Roger Morgan",
  "Roll",
  "Expert 35+",
  [2, 3, 2, 1, 2, 1]
);

let racer4 = new Racer(
  "Ben Michels",
  "Nocterra Trek",
  "Expert 35+",
  [4, 5, 3, 7, 5, 4]
);

let racer5 = new Racer("Dan Nono", "Gemini", "Expert 35+", [4]);

console.log(racer1);
racer1.getSeriesPoints();
console.log(racer1);

console.log(racer2);
racer2.getSeriesPoints();
console.log(racer2);

console.log(racer3);
racer3.getSeriesPoints();
console.log(racer3);

console.log(racer4);
racer4.getSeriesPoints();
console.log(racer4);

console.log(racer5);
racer5.getSeriesPoints();
console.log(racer5);

console.log(`Expert 35+: 
${racer1.name} : ${racer1.totalPoints}
${racer2.name} : ${racer2.totalPoints}
${racer3.name} : ${racer3.totalPoints}
${racer4.name} : ${racer4.totalPoints}
${racer5.name} : ${racer5.totalPoints}`);
