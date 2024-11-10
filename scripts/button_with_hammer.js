const button = document.querySelector('#button_with_hammer button')
const icon = document.querySelector('#button_with_hammer .icon')

button.addEventListener('mouseenter', () => {
  icon.classList.add('hoverAnimate')
})

button.addEventListener('click', () => {
  icon.classList.add('clickAnimate')

  setTimeout(() => {
    icon.classList.remove('clickAnimate')
  }, 1000)
})