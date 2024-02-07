(function() { //Körs automatiskt varje gång popup-sidan visas

    chrome.storage.sync.get().then((options) => { //hämta sparade options
  
      if (!options["init"]) { options = {"tool_colorcode": true} } //Om det inte finns några options så ladda defaults
    });

    window.addEventListener("load", loadData);
    
  })();


function loadData() {
    let site = {};
    let data = [];

    let schoolName = "";

    site.table = document.querySelector("table.EditTable > tbody > tr > td > table > tbody");
    if (site.table) {
        for (let num = 0; num < site.table.rows.length; num++) {
            let row = site.table.rows[num];
            if (row.getAttribute("bgcolor") == "White") {
                let programText = row.cells[0].childNodes[0].innerText;

                let programCode = programText.split("(")[1].replace(")","").trim();
                let programSpecCode = "";
                if (programCode.length > 2) {
                    programSpecCode = programCode;
                    programCode = programCode.substring(0,2);
                }
                
                let programName = programText.split("(")[0].trim();
                let programSpecName = "";
                if (programName.search(",") > 0) {
                    programSpecName = programName.split(",")[1].trim();
                    programName = programName.split(",")[0].trim();
                }

                
                let programSeats = parseInt(row.cells[3].childNodes[0].innerText);
                let programStudents = parseInt(row.cells[2].childNodes[0].innerText);


                let programData = {
                    "Skola": schoolName,
                    "Program": programName,
                    "Programkod": programCode,
                    "Inriktning": programSpecName,
                    "Inriktningskod": programSpecCode,
                    "Sökande": programStudents,
                    "Platser": programSeats
                }
                data.push(programData);

                // Färgkoda raden
                if (programStudents > programSeats) {
                    row.setAttribute("bgcolor", "#ccffcc");
                }
                else if (programStudents < (programSeats / 2)) {
                    row.setAttribute("bgcolor", "#ffcccc");
                }
                else {
                    row.setAttribute("bgcolor", "#ffffcc");
                }

                // Färgkoda Cellen
                /* if (programStudents > programSeats) {
                    row.cells[2].setAttribute("bgcolor", "#ccffcc");
                }
                else if (programStudents < (programSeats / 2)) {
                    row.cells[2].setAttribute("bgcolor", "#ffcccc");
                }
                else {
                    row.cells[2].setAttribute("bgcolor", "#ffffcc");
                } */
            }

            else if (row.getAttribute("bgcolor") == "") {
                if (row.cells[0].getAttribute("colspan") == "4") {
                    let header = row.cells[0].childNodes[0].innerText.replace("# ", "");
                    schoolName = header;
                }
                
            }
            else {
            }
            
        }
    console.log(data);
    }
}