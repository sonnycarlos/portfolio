let prevScrollPos = window.pageYOffset
const navigationBar = document.getElementById('navigation_bar')

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset

  if (prevScrollPos > currentScrollPos) {
    navigationBar.style.top = '0'
  } else {
    navigationBar.style.top = '-100px'
  }

  prevScrollPos = currentScrollPos
}