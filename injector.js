(function() {

  $("#right").prepend("<button class='button' onClick='collectNames()' data-toggle='modal' data-target='#slump'>Samla namn</button>");
  $("#right").prepend("<button class='button' onClick='collectAttendingNames()' data-toggle='modal' data-target='#slump'>Samla närvarande namn</button>");

  $("body").append("<style>.row{display: flex; flex-wrap: wrap;}"
        + ".col-6{flex: 0 0 50%; max-width: 50%;}"
        + "#slumpBtn{margin-left: 20px;}"
        + ".modal-title{display: inline-block;}"
        + "</style>"
  );

  $("body").append("<div class='modal' id='slump'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'>"  
        + "<h3 class='modal-title'>Den fantastiska gruppslumparen</h5><button type='button' class='close' data-dismiss='modal'>&times;</button></div>"
        + "<div class='modal-body'><div class='row'>"
        + "<div id='left-body' class='col-6'><h4>Närvarande</h4></div>"
        + "<div id='right-body' class='col-6'><h4>Grupper</h4></div></div></div>"
        + "<div class='modal-footer'><div class='row'>"
        + "<div class='col-6'><input type='number' id='numberInput' placeholder='Gruppstorlek'>"
        + "<button id='slumpBtn'>Slumpa</button></div>"
        + "<div class='col-6'><button id='closeBtn' type='button' class='btn btn-danger' data-dismiss='modal'>Stäng</button></div></div></div>"
        + "</div></div></div>"
  );
})();
