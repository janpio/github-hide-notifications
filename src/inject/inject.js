var console_log_prefix = "github-hide-notifications: "

// npm: dom-loaded
var domLoaded = new Promise(resolve => {
	if (document.readyState === 'interactive' || document.readyState === 'complete') {
		resolve();
	} else {
		document.addEventListener('DOMContentLoaded', () => {
			resolve();
		}, {
			capture: true,
			once: true,
			passive: true
		});
	}
});

console.log(console_log_prefix + "inject.js")

chrome.storage.sync.get(null, function(data) {

  console.log(console_log_prefix + 'settings', data)

  function hideNotifications() {

    console.log(console_log_prefix + "hideNotifications")
    hide = (data.hide) ? data.hide : ""
    not_hide = data.not_hide ? data.not_hide : ""

    hide = hide.split("\n")
    not_hide = not_hide.split("\n")

    var boxedGroups = document.querySelectorAll('.boxed-group')
    boxedGroups.forEach(function(group) {
      var links = group.querySelectorAll('h3 a')
      var repo = links[0].innerText
      
      hide.forEach(_hide => {
        if(_hide == "") {
          // do nothing for empty string
        } 
        else if(repo.includes(_hide)) {
          group.setAttribute('style', 'display:none')
        } 
        else {
          group.setAttribute('style', 'display:block')
        }
      });

      not_hide.forEach(_not_hide => {
        if(_not_hide == "") {
          // do nothing for empty string
        } 
        else if(repo.includes(_not_hide)) { 
          group.setAttribute('style', 'display:block')
        }
      })

    })
    console.log(console_log_prefix + "... hidden")
  }

  var readyStateCheckInterval = setInterval(function () {
    console.log(console_log_prefix + "call in setInterval")
    hideNotifications()
  }, 10);

  console.log(console_log_prefix + "call directly in inject.js")
  hideNotifications()

  async function afterLoad() {
    await domLoaded;
    console.log(console_log_prefix + "dom ready")
    console.log(console_log_prefix + "call in afterLoad")
    hideNotifications()
    clearInterval(readyStateCheckInterval);

    removeHiddenNotifications()
  }
  afterLoad()

  function pjaxEnd() {
    console.log(console_log_prefix + 'pjax:end callback')
    console.log(console_log_prefix + "call in pjaxEnd")
    hideNotifications()
  }
  document.addEventListener('pjax:end', pjaxEnd);

  function removeHiddenNotifications() {
    var boxedGroups = document.querySelectorAll('.boxed-group')
    boxedGroups.forEach(function(group) {
      if(group.style.display == 'none') {
        console.log(console_log_prefix + "remove group", group)
        group.outerHTML = ""
      }
    })
  }

})