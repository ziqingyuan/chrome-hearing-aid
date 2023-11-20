document.getElementById("readMsg").addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        var activeTabUrl = activeTab.url;

        // Now you have the URL, and you can send it to background.js
        chrome.runtime.sendMessage({url: activeTabUrl}, function(response) {
            var msg = new SpeechSynthesisUtterance();
            msg.text = response;
            window.speechSynthesis.speak(msg);
        });
    });
    
});

$(function(){
    $('#name').keyup(function(){ //name is the input element
        $('#greet').text('Enter Text: ' + $('#name').val()); //updates greet to whatever input element we have
    })
})
