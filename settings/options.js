function saveOptions(e) {
    e.preventDefault();
    chrome.storage.sync.set({
        hide: document.querySelector("#hide").value,
        not_hide: document.querySelector("#not_hide").value
    });
}

function restoreOptions() {
    chrome.storage.sync.get({
        hide: '',
        not_hide: ''
    }, function(items) {
        document.getElementById('hide').value = items.hide;
        document.getElementById('not_hide').value = items.not_hide;
    });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);