

chrome.runtime.onMessage.addListener(
  function(request) {
    switch (request.action) {
      case "copynames":
        collectNames("all", "list", "clipboard");
        break;
      case "copyattendingnames":
        collectNames("attending", "list", "clipboard");
        break;
      case "modalnames":
        collectNames("all", "json", "modal");
        break;
      case "modalattendingnames":
        collectNames("attending", "json", "modal");
        break;
    }
});





function collectNames(scope, format, target) {
  var studentList = "";

	$("#right>form>table.longlist>tbody").find('tr').slice(1, -1).each(function(){

    if (scope == "all") {
      let studentName = $(this).children('td').slice(1,2).text();
      studentName = studentName.trim();
      studentName = studentName.split(" ");
      let firstName = studentName[studentName.length - 1];
      let sureName = studentName[0];
      studentList += firstName + " " + sureName + "\n";
    }

    else if ($(this).children('td').slice(2,3).children('select').val() == 0) {
      //Attending
      let studentName = $(this).children('td').slice(1,2).text();
      studentName = studentName.trim();
      studentName = studentName.split(" ");
      let firstName = studentName[studentName.length - 1];
      let sureName = studentName[0];
      studentList += firstName + " " + sureName + "\n";
    }

    else if ($(this).children('td').slice(2,3).children('select').val() == 206) {
      //Attending but late
      let studentName = $(this).children('td').slice(1,2).text();
      studentName = studentName.trim();
      studentName = studentName.split(" ");
      let firstName = studentName[studentName.length - 1];
      let sureName = studentName[0];
      studentList += firstName + " " + sureName + "\n";
    }

    else {
      //Skip
    }

  });

  studentList = studentList.replace(/\n$/, "");



  if (format == "json") {
    studentList = studentList.split("\n");
  }


  if (target == "clipboard") {
    $("#toClipBoard").val(studentList);
    $("#toClipBoard").select();
    document.execCommand("copy");
  }

  if (target == "modal") {
    var modal_title;

    switch (scope) {
      case "all":
        modal_title = "Hela klassen";
        break;
      case "attending":
        modal_title = "Närvarande";
        break;
    }

    gruppSlump(studentList, modal_title);
  }

}

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

let adjective = ['ginormous', 'explosive', 'awesome', 'rabid', 'raving', 'slippery', 'festive', 'fantastic', 'cerulean', 'cosmic', 'transcendent', 'bionic', 'cyber', 'shambling', 'primordial', 'bubbling', 'frothy', 'slobbering', 'poisonous', 'galactic', 'drooling', 'electric'];
let noun = ['badgers', 'sloths', 'robots', 'nibblers', 'rockets', 'squirrels', 'bananas', 'beavers', 'moths', 'tardigrades', 'crustaceans', 'unicorns', 'mammoths', 'mastodons', 'starfish', 'shamblers', 'shoggoths', 'gnomes', 'rabbits', 'boogalos', 'bugbears', 'ninjas', 'pedestrians'];

function gruppSlump(studentList, header) {
  $("#leftBdy")
    .empty()
    .append("<h4>" + header + "</h4>")
    .append("<ul class='slump-list'></ul>");

  $("#slump").modal("show");

  $("#leftBdy").empty().append("<h4>" + header + "</h4>").append("<ul class='slump-list'></ul>");

  studentList.forEach(element => {
    $("#leftBdy ul").append("<li>" + element + "</li>");
  });

  $("#slumpBtn").click(function () {
    let groupNumber = 1;
    let i = 1;
    let preUsed = adjective;
    let suffUsed = noun;
    slumpList = shuffle(studentList);

    $("#rightBdy").empty().append("<h4>Grupper</h4>").append("<ul class='slump-list'></ul>");

    slumpList.forEach(element => {
        if (i == 1) {
          let pre = preUsed[getRandomInt(preUsed.length)];
          let suff = suffUsed[getRandomInt(suffUsed.length)];

          $("#rightBdy ul").append("<li class='slump-list-group'>" + groupNumber + ". " + pre + " " + suff + "</li>");

          preUsed = preUsed.filter(item => item !== pre);
          suffUsed = suffUsed.filter(item => item !== suff);
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
