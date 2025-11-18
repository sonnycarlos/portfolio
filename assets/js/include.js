document.addEventListener('DOMContentLoaded', function () {
  const includeElements = document.querySelectorAll('[include-html]')

  includeElements.forEach(async (el) => {
    const file = el.getAttribute('include-html')
    try {
      const response = await fetch(file);
      const content = await response.text()
      el.innerHTML = content
    } catch (e) {
      el.innerHTML = 'Component not found'
    }
  })
})