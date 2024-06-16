function isAndroid() {
  var userAgent = navigator.userAgent
  return /Android/.test(userAgent)
}

if (isAndroid()) {
  document.body.classList.add('android_device')
}