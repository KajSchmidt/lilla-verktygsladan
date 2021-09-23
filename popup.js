
(function() {

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
    chrome.tabs.create({ url: "https://webtools.itgonline.se/groupie/" });
  });

  $("#openGroupieCAll").click(function() {
    sendCommand("copynames");
    chrome.tabs.create({ url: "https://webtools.itgonline.se/groupie/#/?paste" });
  });

  $("#openGroupieCAtt").click(function() {
    sendCommand("copyattendingnames");
    chrome.tabs.create({ url: "https://webtools.itgonline.se/groupie/#/?paste" });
  });


  $("#openSelfie").click(function() {
    chrome.tabs.create({ url: "https://webtools.itgonline.se/selfie/" });
  });

  $("#openSelfieCAll").click(function() {
    sendCommand("copynames");
    chrome.tabs.create({ url: "https://webtools.itgonline.se/selfie/#/?paste" });
  });

  $("#openSelfieCAtt").click(function() {
    sendCommand("copyattendingnames");
    chrome.tabs.create({ url: "https://webtools.itgonline.se/selfie/#/?paste" });
  });


/*
  $("#copyNames").click(function() {
    sendCommand("copynames");
  });

  $("#copyAttendingNames").click(function() {
    sendCommand("copyattendingnames");
  });
*/

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
}
