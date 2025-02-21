document.addEventListener('DOMContentLoaded', function () {
  fetch('../components/menu_modal.html')
    .then(response => response.text())
    .then(html => {
      document.querySelector('.menu_modal .modal').style.display = 'none'

      document.querySelector('.open_menu').addEventListener('click', function () {
        document.querySelector('.menu_modal').innerHTML = html
        document.querySelector('.menu_modal .modal').style.display = 'flex'
      })

      document.querySelector('.close_menu').addEventListener('click', function () {
        document.querySelector('.menu_modal .modal').style.display = 'none'
      })
    })
    .catch(error => console.error('Error loading the menu:', error))
})