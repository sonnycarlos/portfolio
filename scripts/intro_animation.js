const intro = document.getElementById('intro')
const spanTxt = document.querySelectorAll('.span')

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    spanTxt.forEach((span, i) => {
      setTimeout(() => {
        span.classList.add('active')
      }, (i + 1) * 400)
    })

    setTimeout(() => {
      spanTxt.forEach((span, i) => {
        span.style.opacity = '0'
      })
    }, 3000)

    setTimeout(() => {
      intro.style.opacity = '0'
      intro.style.pointerEvents = 'none'
    }, 4000)
  })
})