const sectionError: HTMLElement = document.querySelector("#error")
const sectionContainer: HTMLElement = document.querySelector("#container")
const h1Error: HTMLElement = document.querySelector("#h1Error")

async function fetchShows(nameShow: string) {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${nameShow}`)
  const shows = await response.json()
  if(shows.length) {
    return shows
  }

  return Promise.reject("Nenhum filme foi encontrado")
}

function getShowName() {
  const input: HTMLInputElement = document.querySelector("#valueUser")
  if(input.value !== "") {
    return input.value
  } else {
    throw new Error("❗ Digite Algo")
  }
}

function tratamentErrorGetShowName() {
  try {
    getShowName()
  } catch(erro) {
    printingError(erro.message)
  }
}

function printingError(erro: string) {
  sectionContainer.classList.add("none")
  sectionError.classList.remove("none")
  h1Error.textContent = erro
}

function clearError() {
  sectionContainer.classList.remove("none")
  sectionError.classList.add("none")
}

function createDiv(id: string) {
  const div = document.createElement("div")
  div.id = id
  return div
}

function createImage(src) {
  const image = document.createElement("img")
  if(src) {
    image.src = src.medium
  } else {
    image.src = "./public/assets/erro.jpg"
  }
  
  return image
}

function createTitle(id: string, showName: string) {
  const h1 = document.createElement("h1")
  h1.id = id
  h1.textContent = showName
  return h1
}

function createRating(id: string, rating: string) {
  const p = document.createElement("p")
  p.id = id
  if(rating) {
    const ratingNumber = Number(rating) * 10
    p.textContent = String(ratingNumber)
  } else {
    p.textContent = `Sem Review`
  }
  
  return p
}

async function submitShowName(ev: { preventDefault: () => void }) {
  ev.preventDefault()
  tratamentErrorGetShowName()
  removeDivFilm()

  const value = getShowName()
  try {
    const response = await fetchShows(value)
    settingVales(response)
    clearError()
  } catch(erro) {
    printingError(erro)
  }
}

function settingVales(shows) {
  for(let i = 0; i < shows.length; i++) {
    const divFilm = createDiv("film")
    const image = createImage(shows[i].show.image)
    const title = createTitle("name-film", shows[i].show.name)
    const rating = createRating("rating", shows[i].show.rating.average)

    divFilm.append(image, title, rating)
    document.querySelector("#films").append(divFilm)
  }
}

function removeDivFilm() {
  const divs = document.querySelectorAll("#film")
  if(divs) {
    divs.forEach(element => element.remove())
  }
}

document.querySelector("form").addEventListener("submit", submitShowName)