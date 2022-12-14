/* (function() {

  chrome.tabs.query({active: true, currentWindow: true}, function (tab) {
    if (tab[0].url.includes("/jsp/teacher/right_teacher_lesson_status.jsp?lesson") == false) {
      $(".schoolsoft").removeClass("btn-primary btn-success");
      $(".schoolsoft").addClass("btn-secondary");
      $(".schoolsoft").addClass("disabled");
    }
  });



})();

document.addEventListener('DOMContentLoaded', function() {

  $("#openGroupie").click(function() {
    chrome.tabs.create({ url: "https://www.toolie.se/groupie/" });
  });

  $("#openGroupieCAll").click(function() {
    sendCommand("copynames");
    chrome.tabs.create({ url: "https://www.toolie.se/groupie/#/?paste" });
  });

  $("#openGroupieCAtt").click(function() {
    sendCommand("copyattendingnames");
    chrome.tabs.create({ url: "https://www.toolie.se/groupie/#/?paste" });
  });


  $("#openSelfie").click(function() {
    chrome.tabs.create({ url: "https://www.toolie.se/selfie/" });
  });

  $("#openSelfieCAll").click(function() {
    sendCommand("copynames");
    chrome.tabs.create({ url: "https://www.toolie.se/selfie/#/?paste" });
  });

  $("#openSelfieCAtt").click(function() {
    sendCommand("copyattendingnames");
    chrome.tabs.create({ url: "https://www.toolie.se/selfie/#/?paste" });
  });




  $("#modalNames").click(function() {
    sendCommand("modalnames");
  });

  $("#modalAttendingNames").click(function() {
    sendCommand("modalattendingnames");
  });

});

function sendCommand(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: command});
  });
} */
