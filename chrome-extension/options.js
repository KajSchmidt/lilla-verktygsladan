(function() { //Körs automatiskt varje gång option-sidan visas


  chrome.storage.sync.get().then((options) => {
    if (!options["init"]) { //Om det inte finns några options så ladda defaults
      options = {"tool_gruppslump": true};
      chrome.storage.sync.set({"init" : true, "tool_gruppslup" : true});
    }
    bindLoadInputs(options);
  });
  
  })();


  function saveOption(input) { //Sparar value från en input med elementets id som key
    let key = {};
    if (input.type == "checkbox") { //Om det är en checkbox används checked > true/false
      key[input.id] = input.checked; 
      chrome.storage.sync.set(key);
    }
    else if (input.value) { //Alla input utom checkbox använder value
      key[input.id] = input.value; 
      chrome.storage.sync.set(key);
    }
    else {
      chrome.storage.sync.remove(input.id); //Tomma input resulterar i att key raderas
    }
    
    
  }


  function bindLoadInputs(options) {
    let inputs = document.querySelectorAll("input"); //Hämtar alla inputs
    for (let input of inputs) {
      if (options[input.id] && input.type == "checkbox") { input.checked = options[input.id] } //Om det är en checkbox så sätt checked true/false
      else if (options[input.id]) { input.value = options[input.id] } //Alla input utom checkbox ändrar value
      input.onchange = () => saveOption(input); //onchange event som sparar förändringar automatiskt
    }
  }