(function() {
  chrome.runtime.onMessage.addListener((request) => { //Inväntar ett meddelande från popup-menyn
    if (request.action == "openlink") {
      let student_list = collectNames();

      if (request.filter) { //Filtrera bort alla med angiven status
        let filter_input = request.filter.split(",");
        student_list = student_list.filter(student => !filter_input.includes(student.status));
      }

      if (request.method == "uri") { //Använd URI/Get-parameter
        window.open(request.href + encodeURIComponent(JSON.stringify(student_list)), "_blank");
      }
    }
  });
})();

function collectNames() {
  let name_array = []; //Array som kommer att populeras med namn och status på alla elever
  let name_table = document.querySelectorAll("table.longlist > tbody > tr"); //Hämtar alla tr i tabellen över elever

  for (let i = 0; i < name_table.length; i++) { //Gå igenom alla tr
    if (i == 0) { continue; } //Hoppar över första raden då den är rubrikerna
    if (i == name_table.length-1) { continue; } //Hoppar över sista raden då den är en sammanräkning


    let new_name = {};
    let name_row = name_table[i];
    let name_cells = name_row.children;
    new_name["namn"] = name_cells[1].textContent.split(" ")[1]; //Plockar ut förnamnet ur "efternamn förnamn"
    new_name["efternamn"] = name_cells[1].textContent.split(" ")[0]; //Plockar ut efternamnet ur "efternamn förnamn"
    new_name["status"] = name_cells[2].firstChild.value; //Hämtar ut värdet ur select-elementet för närvaro
    name_array.push(new_name);
  }
  
  return name_array;
}

