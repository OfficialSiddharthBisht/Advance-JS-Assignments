let img_arr = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2725/1122725-h-120e12de85a9","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4044/1094044-h-857d7bf97430","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1186/1201186-h-4c534a0a3c40","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/84/1200084-h-081a62387651","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1464/1201464-h-e500069d0f2f","https://www.hotstar.com/in/movies/bheeshma-parvam/1260090235/watch","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5275/1105275-h-db6711300155","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5286/1095286-h-8ed038ea0e45"]
let i = 0;
let slideshow = document.getElementById("slideshow");
const intervalId = setInterval(()=>{
    slideshow.innerHTML = "";
    if(i >= img_arr.length){
        i = 0;
        // clearInterval(intervalId);
    }
    let image = document.createElement('img');
    image.src = img_arr[i++];
    slideshow.append(image);
},5000);

const movieArr = [
    {
        name: "Spider-Man: No way Home",
        releaseDate : "2021",
        poster : "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UX67_CR0,0,67,98_AL_.jpg",
        IMDb_rating : 8.4,
    },
    {
        name: "The King's Man",
        releaseDate : "2021",
        poster : "https://m.media-amazon.com/images/M/MV5BMDEzZDY2ZDktNTlmOS00NThjLThkNTEtMjE5MzI5NWEwZmRjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX67_CR0,0,67,98_AL_.jpg",
        IMDb_rating : 6.3,
    },
    {
        name: "Licorice Pizza",
        releaseDate : "2021",
        poster : "https://m.media-amazon.com/images/M/MV5BYjkwMzIxYzMtOTVkMS00NDQxLThkMjItNzgxN2RiNjdlNTliXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY98_CR0,0,67,98_AL_.jpg",
        IMDb_rating : "7.3",
    },
    {
        name: "The Worst Person in the World ",
        releaseDate : "2021",
        poster : "https://m.media-amazon.com/images/M/MV5BZmYwYTM0NDctZGI3Ny00ZmQ5LWE0ZDMtZWZhNzBiMWYxNzk3XkEyXkFqcGdeQXVyMzExODEzNDA@._V1_UX67_CR0,0,67,98_AL_.jpg",
        IMDb_rating : 7.9,
    },
    {
        name: "West Side Story",
        releaseDate : "2021",
        poster : "https://m.media-amazon.com/images/M/MV5BMzQ5ZDZhZDItZTNmZi00MWQ0LWJlNDUtZTE4ZWJmODNlM2Y3XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX67_CR0,0,67,98_AL_.jpg",
        IMDb_rating : 7.3,
    },
    {
        name: "Nobody",
        releaseDate : "2021",
        poster : "https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX67_CR0,0,67,98_AL_.jpg",
        IMDb_rating : 7.4,
    },
    {
        name: "Pleasure",
        releaseDate : "2021",
        poster : "https://m.media-amazon.com/images/M/MV5BNmU3ZTJjMTEtYzc2Ny00YjVhLTkyYmQtZTFhYWY0N2MxMzkxXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX67_CR0,0,67,98_AL_.jpg",
        IMDb_rating : "6.3",
    },
    {
        name: "Black Widow",
        releaseDate : "2021",
        poster : "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
        IMDb_rating : "6.7",
    },
    {
        name: "Red Notice",
        releaseDate : "2021",
        poster : "https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
        IMDb_rating : "6.3",
    }
];
localStorage.setItem('movies',JSON.stringify(movieArr));
let movieId = document.getElementById("movies");
let mv = JSON.parse(localStorage.getItem('movies'));
displayData(mv);
// * sorting
document.getElementById("sort").addEventListener("change",()=>{
    let sortType = document.getElementById("sort").value;
    if(sortType == "ratingLowToHigh"){
        mv.sort(function(a , b){
            return a.IMDb_rating - b.IMDb_rating;
        })
    }else if(sortType == "ratingHighToLow"){
        mv.sort(function(a , b){
            return b.IMDb_rating - a.IMDb_rating;
        })
    }
    displayData(mv);
})
function displayData(mv){
    movieId.innerHTML = "";
    mv.forEach((movie) => {
        let card = document.createElement("div");
        card.setAttribute("id","card");
        let movieName = document.createElement("h2");
        movieName.innerText = movie.name;
        let releaseDate = document.createElement("h3");
        releaseDate.innerText = movie.releaseDate;
        let poster = document.createElement("img");
        poster.src = movie.poster;
        let imdbRating = document.createElement("p");
        imdbRating.innerText ="IMDb Rating -> "+  movie.IMDb_rating;
        card.append(movieName , releaseDate , poster , imdbRating);
        movieId.append(card);
    });
}