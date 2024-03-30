const projectLinks = document.getElementById('project_links')
const preview = document.getElementById('preview')
const thumbnail = document.getElementById('thumbnail')

let isInside = false

const bgPositions = {
  p1: '0 0',
  p2: '0 25%',
  p3: '0 50%',
  p4: '0 75%',
  p5: '0 100%'
}

const thumbnailImages = {
  'link-1': 'assets/images/thumbnails/john_foy.png',
  'link-2': 'assets/images/thumbnails/bulsu_pmes.png',
  'link-3': 'assets/images/thumbnails/tribbo.png',
  'link-4': 'assets/images/thumbnails/sr_gate_pass.png',
  'link-5': 'assets/images/thumbnails/ladderwise.png',
  'link-6': 'assets/images/thumbnails/agartha.png'
}

const moveStuff = (e) => {
  const mouseInside = isMouseInsideContainer(e)

  if (mouseInside !== isInside) {
    isInside = mouseInside

    if (isInside) {
      gsap.to(preview, 0.3, { scale: 1, opacity: 1 })
    } else {
      gsap.to(preview, 0.3, { scale: 0, opacity: 0 })
    }
  }
}

const moveProject = (e) => {
  const previewRect = preview.getBoundingClientRect()
  const offsetX = previewRect.width / 2
  const offsetY = previewRect.height / 2

  preview.style.top = e.pageY - offsetY + 'px'
  preview.style.left = e.pageX - offsetX + 'px'
}

const moveThumbnail = (project) => {
  const projectId = project.id
  const thumbnailClass = `link-${projectId}`
  const imagePath = thumbnailImages[thumbnailClass] || ''

  gsap.to(thumbnail, 0.4, { backgroundPosition: bgPositions[projectId] || '0 0' })

  if (imagePath) {
    thumbnail.style.backgroundImage = `url('${imagePath}')`
  }
}

const isMouseInsideContainer = (e) => {
  const containerRect = projectLinks.getBoundingClientRect()

  return (
    e.pageY >= containerRect.top &&
    e.pageY <= containerRect.bottom &&
    e.pageX >= containerRect.left &&
    e.pageX <= containerRect.right
  )
}

window.addEventListener('mousemove', moveStuff)

Array.from(projectLinks.children).forEach((project) => {
  project.addEventListener('mousemove', (e) => {
    moveProject(e)
    moveThumbnail(project)
  })
})
