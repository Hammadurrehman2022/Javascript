  const button = document.querySelectorAll(".button")
  const body = document.body

button.forEach((button) => {
  console.log(button)
  button.addEventListener("click", (e) => {
    console.log(e)
    console.log(e.target)
    body.style.backgroundColor = e.target.id
  })
})