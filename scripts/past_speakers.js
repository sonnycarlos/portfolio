const pastSpeakerStacksContainer = document.getElementById('speakers')
const pastSpeakerStacks = pastSpeakerStacksContainer.querySelectorAll('.speaker')

let pastSpeakerPos = 0
let pastSpeakerSpeed = 0.5

function handlePastSpeakerMouseEnter(event) {
  pastSpeakerSpeed = 0.15

  pastSpeakerStacks.forEach(stack => {
    if (stack !== event.currentTarget) {
      stack.style.opacity = '0.25'
    } else {
      stack.style.opacity = '1'
    }
  })
}

function handlePastSpeakerMouseLeave() {
  pastSpeakerSpeed = 0.5
  pastSpeakerStacks.forEach(stack => {
    stack.style.opacity = '1'
  })
}

pastSpeakerStacks.forEach(stack => {
  stack.addEventListener('mouseenter', handlePastSpeakerMouseEnter)
  stack.addEventListener('mouseleave', handlePastSpeakerMouseLeave)
})

function pastSpeakerScrollStacks() {
  pastSpeakerPos -= pastSpeakerSpeed 

  pastSpeakerStacksContainer.style.transform = `translateX(${pastSpeakerPos}px)`

  if (Math.abs(pastSpeakerPos) >= pastSpeakerStacksContainer.scrollWidth / 2) {
    pastSpeakerPos = 0
  }

  requestAnimationFrame(pastSpeakerScrollStacks)
}

pastSpeakerScrollStacks()