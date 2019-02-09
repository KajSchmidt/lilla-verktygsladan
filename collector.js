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

let prefix = ['awesome', 'rabid', 'raving', 'slippery', 'festive', 'fantastic'];
let suffix = ['badgers', 'sloths', 'robots', 'nibblers', 'rockets', 'squirrels', 'bananas']; 

function collectAttendingNames() {

  var studentList = []

	$("#right>form>table.longlist>tbody").find('tr').slice(1, -1).each(function(){
    if ($(this).children('td').slice(2,3).children('select').val()== 0) {
      studentList.push($(this).children('td').slice(1,2).text());
    }

  });

  let leftBody = document.getElementById("left-body");
  let rightBody = document.getElementById("right-body");

  let classUl = document.createElement("ul");
  
  studentList.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    classUl.appendChild(li);    
  });

  leftBody.appendChild(classUl);

  let modalFooter = document.getElementsByClassName("modal-footer")[0];
  
  let slumpButton = document.createElement("button");
  slumpButton.type = "button";
  slumpButton.class="btn btn-danger";
  slumpButton.textContent = "Slumpa";
  modalFooter.appendChild(slumpButton);

  let slumpNumber = document.createElement("input");
  slumpNumber.type = "number";
  slumpNumber.id = "numberInput";
  slumpNumber.placeholder = "Gruppstorlek";
  modalFooter.appendChild(slumpNumber);

  slumpButton.addEventListener("click", function() {
    let slumpUl = document.createElement("ul");

    slumpList = shuffle(studentList);

    let i = 1;

    slumpList.forEach(element => {
        if (i == 1) {
          let li = document.createElement("li");
          li.style = "text-transform:capitalize; font-weight:600;";
          li.textContent = prefix[getRandomInt(prefix.length)] + " " + suffix[getRandomInt(suffix.length)];
          slumpUl.appendChild(li);
        }
        let li = document.createElement("li");
        li.textContent = element;
        slumpUl.appendChild(li);
        if( i == slumpNumber.value) {
          rightBody.appendChild(slumpUl);
          slumpUl = document.createElement("ul");
          i = 0;
        }
        i++;
      });
      rightBody.appendChild(slumpUl);
  });
}
