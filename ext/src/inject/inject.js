var wikiPage = document.getElementById('firstHeading');
//wikiPage.innerHTML = "bob";
console.log("page: " + wikiPage.innerHTML);
wikiPage.innerHTML = "<a href='setting.txt' download='setting.txt'>Export Setting</a>";
// store this visit in JSON file

// retrieve previous visits from JSON file


chrome.storage.local.get(null, function(items) { // null implies all items
    // Convert object to a string.
    var result = JSON.stringify(items);

    // Save as file
    var url = 'data:application/json;base64,' + btoa(result);
    chrome.downloads.download({
        url: url,
        filename: 'filename_of_exported_file.json'
    });
});



      function saveChanges() {
        // Get a value saved in a form.
        var theValue = textarea.value;
        // Check that there's some code there.
        if (!theValue) {
          message('Error: No value specified');
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': theValue}, function() {
          // Notify that we saved.
          message('Settings saved');
        });
      }