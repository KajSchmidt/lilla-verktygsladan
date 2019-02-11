(function() {

  $("body").append("<textarea id='toClipBoard'></textarea>");
  $("#toClipBoard").css('position','absolute');
  $("#toClipBoard").css('top','-1000');
  $("#toClipBoard").css('left','-1000');


  $("body").append("<style>"
        + ".row{display: flex; flex-wrap: wrap;}"
        + ".col{flex: 0 0 50%; max-width: 50%;}"
        + "#slumpBtn{margin-left: 20px;}"
        + ".modal-title{display: inline-block;}"
        + ".slump-list{list-style: none;}"
        + ".slump-list-group{text-transform:capitalize; font-weight:600;}"
        + "</style>"
  );



  $("body").append("<div class='modal' id='slump'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'>"
        + "<h3 class='modal-title'>Den fantastiska gruppslumparen</h5><button type='button' class='close' data-dismiss='modal'>&times;</button></div>"
        + "<div class='modal-body'><div class='row'>"
        + "<div id='leftBdy' class='col'><h4>Närvarande</h4></div>"
        + "<div id='rightBdy' class='col'><h4>Grupper</h4></div></div></div>"
        + "<div class='modal-footer'><div class='row'>"
        + "<div class='col'><input type='number' id='numberInput' min='0' placeholder='Gruppstorlek'>"
        + "<button id='slumpBtn'>Slumpa</button></div>"
        + "<div class='col'><button id='closeBtn' type='button' data-dismiss='modal'>Stäng</button></div></div></div>"
        + "</div></div></div>"
  );
})();
