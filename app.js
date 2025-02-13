document.addEventListener("DOMContentLoaded", () => {
    const fileInputs = document.querySelectorAll(".file-input")
  
    fileInputs.forEach((input) => {
      input.addEventListener("change", (event) => {
        const file = event.target.files[0]
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            const img = input.previousElementSibling
            img.src = e.target.result
          }
          reader.readAsDataURL(file)
        }
      })
    })
  })
  
  