(function() {

  $("#right").prepend("<button class='button' onClick='collectNames()' data-toggle='modal' data-target='#slump'>Samla namn</button>");
  $("#right").prepend("<button class='button' onClick='collectAttendingNames()' data-toggle='modal' data-target='#slump'>Samla närvarande namn</button>");

  $("body").append("<div class='modal' id='slump'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'>"  
        + "<h5 class='modal-title'>Grupp slumparen</h5><button type='button' class='close' data-dismiss='modal'>&times;</button></div>"
        + "<div class='modal-body'><div class='row'>"
        + "<div id='left-body' class='col-6'></div><div id='right-body' class='col-6'></div></div></div>"
        + "<div class='modal-footer'><button id='closeBtn' type='button' class='btn btn-danger' data-dismiss='modal'>Close</button></div>"
        + "</div></div></div>");

})();
