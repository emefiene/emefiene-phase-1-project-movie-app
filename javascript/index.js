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

function handleListener(element){
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

const stars = document.querySelectorAll('.ratings_stars');

document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('ratings_stars')) {
      let clicktargetReached = false;
     for (const star of stars) {
        star.classList[clicktargetReached ? 'remove' : 'add']('selected');
        if (star === evt.target) {
         clicktargetReached = true;
        }
      }
     result.textContent = evt.target.dataset.rating;
    }
});

function fetchPost (postData) {
   fetch('http://localhost:3000/movies',{
          method: 'POST',
           headers: {
            "Content-Type": 'application/json'
        },
        body:  JSON.stringify({postData})

       })
          .then(res => res.json())
          .then(res => genresClassification(res))

    }

    function getInput (){
        const form = document.getElementById('new-movie')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const  postData = {
            titlt: e.target.title.value,
            director: e.target.director.value,
            posterUrl: e.target.posterUrl.value,
            genres: e.target.genres.value,
            plot: e.target.plot.value,
            actors: e.target.actors.value
    
            }
            //debugger
           fetchPost(postData)
           form.reset()
        })
        
    }