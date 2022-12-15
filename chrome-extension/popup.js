 (function() {

  chrome.tabs.query({active: true, currentWindow: true}, function (tab) {
    if (tab[0].url.includes("/jsp/teacher/right_teacher_lesson_status.jsp?lesson") == false) {
      let deactive_buttons = document.querySelectorAll(".schoolsoft_attending");
      for (let button of deactive_buttons) {
        button.classList.toggle("btn-primary");
        button.classList.toggle("btn-secondary");
        button.classList.toggle("disabled");
      }
    }
  });

  let automatic_buttons = document.querySelectorAll("button[data-href]");
  for (let button of automatic_buttons) {
    let setup = {
      "action": "openlink",
      "href": button.getAttribute("data-href")
    }
    if (button.getAttribute("data-method")) { setup.method = button.getAttribute("data-method"); }
    if (button.getAttribute("data-filter")) { setup.filter = button.getAttribute("data-filter"); }

    button.onclick = () => sendCommand(setup);
  }

})();

function sendCommand(setup) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, setup);
  });
}

