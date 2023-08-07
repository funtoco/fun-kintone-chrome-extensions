document.getElementById('saveButton').addEventListener('click', function() {
    const userName = document.getElementById('userName').value;
    chrome.storage.local.set({userName: userName}, function() {
        console.log('Value is set to ' + userName);
    });
});
