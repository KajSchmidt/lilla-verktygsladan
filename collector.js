function shuffle(array) {
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length, temporaryValue, randomIndex;

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

  var studentList = []

	$("#right>form>table.longlist>tbody").find('tr').slice(1, -1).each(function(){

        studentList.push($(this).children('td').slice(1,2).text());

  });

  console.log(studentList);

}

let adjective = ['awesome', 'rabid', 'raving', 'slippery', 'festive', 'fantastic', 'cerulean', 'cosmic', 'transcendent', 'bionic', 'cyber', 'shambling', 'primordial', 'bubbling', 'frothy', 'slobbering', 'poisonous'];
let noun = ['badgers', 'sloths', 'robots', 'nibblers', 'rockets', 'squirrels', 'bananas', 'beavers', 'moths', 'tardigrades', 'crustaceans', 'unicorns', 'mammoths', 'mastodons', 'starfish', 'shamblers', 'shoggoths', 'gnomes', 'rabbits'];

function collectAttendingNames() {

  var studentList = [];

  if (studentList.length == 0) {
    $("#right>form>table.longlist>tbody").find('tr').slice(1, -1).each(function(){
      if ($(this).children('td').slice(2,3).children('select').val()== 0) {
        studentList.push($(this).children('td').slice(1,2).text());
      }
    });
  }

  let leftBody = document.getElementById("left-body");
  let rightBody = document.getElementById("right-body");

  let classUl = document.createElement("ul");
  classUl.style = "list-style: none;";
  
  studentList.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    classUl.appendChild(li);    
  });

  leftBody.appendChild(classUl);

  let slumpBtn = document.getElementById("slumpBtn");
  let slumpInput = document.getElementById("numberInput");

  slumpBtn.addEventListener("click", function() {

    // suck då
    $("#right-body").empty();
    $("#right-body").append("<h4>Grupper</h4>");

    let groupNumber = 1;
    let slumpUl = document.createElement("ul");
    slumpUl.style = "list-style: none;";
    slumpList = shuffle(studentList);

    let i = 1;

    slumpList.forEach(element => {
        if (i == 1) {
          let li = document.createElement("li");
          li.style = "text-transform:capitalize; font-weight:600;";
          li.textContent = groupNumber + ". " + adjective[getRandomInt(adjective.length)] + " " + noun[getRandomInt(noun.length)];
          slumpUl.appendChild(li);
          groupNumber++;
        }
        let li = document.createElement("li");
        li.textContent = element;
        slumpUl.appendChild(li);
        if( i == slumpInput.value) {
          rightBody.appendChild(slumpUl);
          slumpUl = document.createElement("ul");
          slumpUl.style = "list-style: none;";
          i = 0;
        }
        i++;
      });
      rightBody.appendChild(slumpUl);
  });
}
