document.addEventListener('DOMContentLoadLoaded', event => {


})

function fetchData (movie){
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(res => res.filter(element => {
       genresClassification(element)

   }))

}