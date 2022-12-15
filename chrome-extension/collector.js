(function() {
  chrome.runtime.onMessage.addListener((request) => {
    if (request.action == "openlink") {
      let student_list = collectNames();

      if (request.filter) {
        let filter_input = request.filter.split(",");
        student_list = student_list.filter(student => !filter_input.includes(student.status));
      }

      if (request.method == "uri") { 
        window.open(request.href + encodeURIComponent(JSON.stringify(student_list)), "_blank");
      }
    }
  });
})();

function collectNames() {
  let name_array = [];
  let name_table = document.querySelectorAll("table.longlist > tbody > tr");

  for (let i = 0; i < name_table.length; i++) {
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

