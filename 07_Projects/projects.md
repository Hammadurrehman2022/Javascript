# Projects Related to DOM

## Project 1 Color Checker

```javascript

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

```

## Project 2 BMI Calculator

```javascript

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const height =parseInt(document.querySelector("#height").value)
  const weight =parseInt(document.
  querySelector("#weight").value)
  const show_result = document.querySelector("#results")
  console.log(typeof height)
  if (isNaN(height) && isNaN(weight)){
    show_result.innerText = "Enter valid height and weight"
  } 
  else if (isNaN(height)){
    show_result.innerText = "Enter valid height"
  }
  else if (isNaN(weight)){
    show_result.innerText = "Enter valid weight"
  }
  else{
    const result = (weight / ((height * height) / 10000)).toFixed(2);
    show_result.innerText = result;
  }
})

```