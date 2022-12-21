(function() { //Körs automatiskt varje gång option-sidan visas


  chrome.storage.sync.get().then((options) => {
    if (!options["init"]) { 
      options = {"tool_gruppslump": true};
      chrome.storage.sync.set({"init" : true, "tool_gruppslup" : true});
    }
    bindLoadInputs(options);
  });
  
  })();


  function saveOption(input) {
    let key = {};
    if (input.type == "checkbox") { 
      key[input.id] = input.checked; 
      chrome.storage.sync.set(key);
    }
    else if (input.value) {
      key[input.id] = input.value; 
      chrome.storage.sync.set(key);
    }
    else {
      chrome.storage.sync.remove(input.id);
    }
    
    
  }


  function bindLoadInputs(options) {
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
      if (options[input.id] && input.type == "checkbox") { input.checked = options[input.id] }
      else if (options[input.id]) { input.value = options[input.id] }
      input.onchange = () => saveOption(input);
    }
  }