const footballPlayer = {
  name: "Messi",
  age: 34,
  salary: 14,
  skills: {
    speed: 7,
    dribbling: 8,
  },
  team: "PSG",
  playsForParis: true,
  isfootballPlayer: true,

  leaveTeam: function () {
    if (this.salary < 25) {
      this.playsForParis = false;
      console.log("Мне слишком мало платят");
    } else {
      console.log("I love Paris");
    }
  },
  changeTeam: function () {
    if (this.age > 36) {
      this.playsForParis = false;
      this.team = "Inter Miami";
    }
  },
  train: function () {
    ++this.skills.dribbling;
    ++this.skills.speed;
    console.log(
      `Speed: ${this.skills.speed}, Dribbling: ${this.skills.dribbling}`
    );
  },
  raiseSalaryBy: function (amount) {
    if (this.skills.speed >= 9 || this.skills.dribbling >= 10) {
      this.salary += amount;
      console.log(`Salary is raised to: ${this.salary}`);
    } else {
      console.log("train more");
    }
  },
};
