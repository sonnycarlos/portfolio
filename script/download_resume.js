document.addEventListener('DOMContentLoaded', function () {
  const downloadResumeBtn = document.getElementById('download_resume_btn')

  downloadResumeBtn.addEventListener('click', function () {
    const resumeFilePath = 'assets/files/Resume.pdf'
    const link = document.createElement('a')

    link.href = resumeFilePath
    link.download = downloadResumeBtn.getAttribute('download') || 'Resume.pdf'

    document.body.appendChild(link)
    document.body.removeChild(link)
    
    link.click()
  })
})
