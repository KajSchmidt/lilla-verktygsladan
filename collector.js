function shuffle(array) {
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function collectNames() {
  var studentList = [];
  if (studentList.length == 0) {
    $("#right>form>table.longlist>tbody")
      .find("tr")
      .slice(1, -1)
      .each(function () {
        studentList.push($(this).children("td").slice(1, 2).text());
      });
  }

  gruppSlump(studentList, "Hela klassen");
}

function collectAttendingNames() {
  var studentList = [];

  if (studentList.length == 0) {
    $("#right>form>table.longlist>tbody")
      .find("tr")
      .slice(1, -1)
      .each(function () {
        if ($(this).children("td").slice(2, 3).children("select").val() == 0) {
          studentList.push($(this).children("td").slice(1, 2).text());
        }
      });
  }

  gruppSlump(studentList, "Närvarande");
}

// let adjective = ['ginormous', 'explosive', 'awesome', 'rabid', 'raving', 'slippery', 'festive', 'fantastic', 'cerulean', 'cosmic', 'transcendent', 'bionic', 'cyber', 'shambling', 'primordial', 'bubbling', 'frothy', 'slobbering', 'poisonous', 'galactic', 'drooling', 'electric'];
// let noun = ['badgers', 'sloths', 'robots', 'nibblers', 'rockets', 'squirrels', 'bananas', 'beavers', 'moths', 'tardigrades', 'crustaceans', 'unicorns', 'mammoths', 'mastodons', 'starfish', 'shamblers', 'shoggoths', 'gnomes', 'rabbits', 'boogalos', 'bugbears', 'ninjas', 'pedestrians'];
let adjective = [
  "gigantiska",
  "explosiva",
  "fantastiska",
  "rabiata",
  "hala",
  "festliga",
  "fanatiska",
  "blåa",
  "kosmiska",
  "bioniska",
  "cybernetiska",
  "drällande",
  "uråldriga",
  "bubblande",
  "löddriga",
  "drägglande",
  "giftiga",
  "galaktiska",
  "elektriska",
  "knasiga",
  "gasiga",
];
let noun = [
  "grävlingar",
  "sengångare",
  "robotar",
  "gnagare",
  "mumsare",
  "raketer",
  "bananer",
  "bävrar",
  "malar",
  "trögkrypare",
  "skaldjur",
  "blötdjur",
  "enhörningar",
  "mammutar",
  "mastodonter",
  "sjöstjärnor",
  "shamblers",
  "shoggoths",
  "tomtar",
  "buggbjörnar",
  "ninjor",
  "fotgängare",
];

function gruppSlump(studentList, header) {
  $("#leftBdy")
    .empty()
    .append("<h4>" + header + "</h4>")
    .append("<ul class='slump-list'></ul>");

  studentList.forEach((element) => {
    $("#leftBdy ul").append("<li>" + element + "</li>");
  });

  $("#slumpBtn").click(function () {
    let groupNumber = 1;
    let i = 1;
    let preUsed = adjective;
    let suffUsed = noun;
    slumpList = shuffle(studentList);

    $("#rightBdy")
      .empty()
      .append("<h4>Grupper</h4>")
      .append("<ul class='slump-list'></ul>");

    slumpList.forEach((element) => {
      if (i == 1) {
        let pre = preUsed[getRandomInt(preUsed.length)];
        let suff = suffUsed[getRandomInt(suffUsed.length)];

        $("#rightBdy ul").append(
          "<li class='slump-list-group'>" +
            groupNumber +
            ". " +
            pre +
            " " +
            suff +
            "</li>"
        );

        preUsed = preUsed.filter((item) => item !== pre);
        suffUsed = suffUsed.filter((item) => item !== suff);
        groupNumber++;
      }

      $("#rightBdy ul").append("<li>" + element + "</li>");

      if (i == $("#numberInput").val()) {
        $("#rightBdy ul").append("<li>&nbsp;</li>");
        i = 0;
      }
      i++;
    });
  });
}
