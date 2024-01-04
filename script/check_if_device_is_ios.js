function isIOS() {
  var userAgent = navigator.userAgent
  return /(iPhone|iPad|iPod)/.test(userAgent)
}

if (isIOS()) {
  document.body.classList.add('ios_device')
}