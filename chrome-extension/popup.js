 (function() { //Körs automatiskt varje gång popup-sidan visas

  chrome.storage.sync.get().then((options) => { //hämta sparade options

    if (!options["init"]) { options = {"tool_gruppslump": true} } //Om det inte finns några options så ladda defaults

    disableButtons(options);
    assignButtons(options);
  });

})();

function sendCommand(setup) { //Skickar instruktioner till content-script
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, setup);
  });
}

function openOptions() {
  chrome.runtime.openOptionsPage();
}

function disableButtons(options) { //Tar bort möjjligheten att klicka på knappar som inte har någon funktion på den aktuella sidan
  chrome.tabs.query({active: true, currentWindow: true}, function (tab) { //Kontrollerar om du faktiskt är på en relevant sida, annars deactiveras knapparna
    let buttons = document.querySelectorAll("button");
    for (let button of buttons) {
      if (button.getAttribute("data-checkfor")) {
        if (!tab[0].url.includes(button.getAttribute("data-checkfor"))) {
          button.classList.toggle("btn-magenta");
          button.classList.toggle("btn-secondary");
          button.classList.toggle("disabled");
        }
      }
    }
  });
}


function assignButtons(options) { //Kopplar onclick-events till relevanta knappar utifrån data-parametrar i HTML-koden
  let automatic_buttons = document.querySelectorAll("button[data-href]"); //Hämtar alla knappar som har custom params och genererar rätt onclick-event
  for (let button of automatic_buttons) {
    if (button.classList.contains("disabled")) { continue; } //Strunta i knappar som ändå inte fungerar på den aktuella sidan
    let href = button.getAttribute("data-href");
    if (options.debug_mode && options.debug_href) { href = options.debug_href; }

    let setup = {
      "action": "openlink",
      "href": href
    }
    if (button.getAttribute("data-method")) { setup.method = button.getAttribute("data-method"); }
    if (button.getAttribute("data-filter")) { setup.filter = button.getAttribute("data-filter"); }

    button.onclick = () => sendCommand(setup);
  }
}