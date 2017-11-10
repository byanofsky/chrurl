chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // First, validate the message's structure
  if ((msg.from === 'content')) {
    // Directly respond to the sender (popup),
    // through the specified callback */
    response('Received at background from content');
    chrome.runtime.sendMessage({ from: 'background', subject: 'Text' }, (response) => console.log(response));
  }
});


