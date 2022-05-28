document.addEventListener('DOMContentLoaded', event => {
    fetchData()
    //getInput()
    h1Mouseover()

})

function h1Mouseover(mouse){
    const main = document.getElementById('main')
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Welcome to Movie App'
    main.addEventListener('mouseover', e => {
    h1.style.color = "green";
    h1.innerHTML = 'Welcome to Movie App'
    h1.innerHTML = 'Thank you'
    })
    main.append(h1)

}

function fetchData (movie){
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(res => res.filter(element => {
        appendGenres(element)
   }))

}
function appendGenres(element){
    const classGenres = document.querySelector('.black')
    const btn = document.createElement('button')
    const h6 = document.createElement('h6')
    h6.textContent = element.genres[0]
    h6.addEventListener('click', e => handleListener(element))
    btn.append(h6)
    classGenres.append(btn)

}
function handleListener(element){
    console.log(element)
    const main = document.querySelector('#main')
    main.textContent = " "
    const li = document.createElement('li')
    const h3Actors = document.createElement('h5')
    h3Actors.textContent = element.actors
    const h3Director = document.createElement('h5')
    h3Director.textContent = element.airector
    const id = document.createElement('h5') 
    id.textContent = element.id
    const pPlot = document.createElement('h5')
    pPlot.textContent = element.plot
    const image = document.createElement('img')
    image.src = element.posterUrl
    const h3Runtime = document.createElement('h5')
    h3Runtime.textContent = element.runtime
    const h3Title = document.createElement('h5')
    h3Title.textContent = element.title
    const h3Year = document.createElement('h5')
    h3Year.textContent = element.year
    li.append(h3Actors,h3Runtime,h3Title,h3Year,h3Director,pPlot,image)
    main.append(li)

}

