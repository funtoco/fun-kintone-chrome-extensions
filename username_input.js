chrome.storage.local.get(['userName'], function(result) {
    const userName = result.userName;

    const container = document.querySelector('.value-6126089');
    if (container) {
        const field = container.querySelector('input.input-text-cybozu');
        if (field) {
            field.value = userName;
        }
    }
});
