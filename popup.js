// 保存されている値を取得して表示
chrome.storage.local.get('userName', function(result) {
    if (result.userName) {
        document.getElementById('savedValue').textContent = 'Saved Value: ' + result.userName;
    }
});

document.getElementById('saveButton').addEventListener('click', function() {
    const userName = document.getElementById('userName').value;
    chrome.storage.local.set({userName: userName}, function() {
        // エラーチェック
        if (chrome.runtime.lastError) {
            console.error("保存中にエラーが発生しました:", chrome.runtime.lastError);
        } else {
            console.log('Value is set to ' + userName);
        }
    });
});
