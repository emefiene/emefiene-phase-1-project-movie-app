document.addEventListener('DOMContentLoadLoaded', event => {


})

function fetchData (movie){
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(res => res.filter(element => {
       genresClassification(element)

   }))

}

function genresClassification (element){
    if(element.genres[0] == 'Adventure'){
        return adventureRender(element)
     }else if(element.genres[0] == 'Crime'){
        return crimeRender(element)
     }else if(element.genres[0] == 'Drama'){
         return renderDrama(element)
     }else if(element.genres[0] == 'Animation'){
        return animationRender(element)
     }else if(element.genres[0] == 'Comedy'){
         return renderComedy(element)
     }else if(element.genres[0] == 'Biography'){
         biographyRender(element)
    }
}

function renderDrama(element){
    const drama = document.querySelector('#drama')
    drama.addEventListener('click', e => {
        handleListener(element)
    })
}

function animationRender(element){
    const animation = document.querySelector('#animation')
    animation.addEventListener('click', e => {
        handleListener(element)
    })
}
function biographyRender(element){
    const biography = document.querySelector('#biography')
    biography.addEventListener('click', e => {
        handleListener(element)
    })
}

function renderComedy(element){
    const comdey = document.querySelector('#comedy')
    comdey.addEventListener('click', e => {
        handleListener(element)
    })
}

function adventureRender(element){
    const adventure = document.querySelector('#adventure')
    adventure.addEventListener('click', e => {
        handleListener(element)
    })
}
function crimeRender(element){
    const crime = document.querySelector('#crime')
    crime.addEventListener('click', e => {
        handleListener(element)
    })
}