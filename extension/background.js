chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.url) {
      // Do something with the URL
      console.log("URL from the active tab:", request.url);

      fetch('http://localhost:3000/one_sentence_desc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: request.url}),
      })
      .then(response => response.json())
      .then(data => {
        sendResponse(data.content);
          // Handle the data received from your server
          
      })
      .catch(error => {
          // Handle any errors
      });
      // Optionally, you can send a response back to popup.js
      // 
      return true;
  }
});