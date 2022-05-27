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
    btn.append(h6)
    classGenres.append(btn)

}

