let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let searchItem = document.getElementById('searchItem').value;
    fetch(`https://www.omdbapi.com/?t=${searchItem}&apikey=8a0425d8`)
    .then(res=>res.json())
    .then(data=>displayData(data))
})
function displayData(data){

    let container = document.getElementById("container");
    container.innerHTML = "";
    let title = document.createElement("h1");
    let releaseDate = document.createElement("h4");
    let poster = document.createElement("img");
    let plot = document.createElement("p");
    let awards = document.createElement("h3");
    title.innerText = data.Title;
    releaseDate.innerText = "Released : " + data.Released;
    poster.src = data.Poster;
    plot.innerText = '" '+ data.Plot + ' "';
    if(data.awards == undefined){
        awards.innerText = "";
    }else{
        awards.innerText = "Awards : "+ data.awards;
    }
    container.append(title,releaseDate,poster,awards,plot);
}