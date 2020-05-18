let container = document.querySelector(".container")

container.addEventListener("input", function (event) {
  if (!event.target.classList.contains("slider")) return

  event.target.parentElement.lastElementChild.innerHTML = event.target.value

  const sliders = document.querySelectorAll(".slider")
  let r = parseInt(sliders[0].value).toString(16).padStart(2, "0")
  let g = parseInt(sliders[1].value).toString(16).padStart(2, "0")
  let b = parseInt(sliders[2].value).toString(16).padStart(2, "0")

  document.body.style.backgroundColor = `#${r}${g}${b}`
  document.querySelector(".color-code").innerHTML = `#${r}${g}${b}`
})