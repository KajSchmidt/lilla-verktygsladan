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
    let href = button.getAttribute("data-href");
    button.onclick = () => chrome.tabs.create({ url: href });
  }

})();

function sendCommand(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: command});
  });
}

