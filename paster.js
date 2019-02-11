(function() {


    if (location.href.includes("?paste") == true) {
      $("#name-list").focus();
      document.execCommand("paste");
    }

})();
