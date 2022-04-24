let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let searchItem = document.getElementById('searchItem').value;
    fetch(`https://www.omdbapi.com/?t=${searchItem}&apikey=8a0425d8`)
    .then(res=>res.json())
    .then(data=>displayData(data))
})
function displayData(data){
    if(data.Response == "False"){
        console.log("false");
        let container = document.getElementById("container");
        container.innerText = "";
        let errorv = document.createElement("img");
        errorv.src = "https://cdn.pixabay.com/photo/2021/01/10/20/03/laptop-5906264_960_720.png";
        
        container.append(errorv);
    }else{
    console.log(data);
    let container = document.getElementById("container");
    container.innerHTML = "";
    let title = document.createElement("h1");
    let releaseDate = document.createElement("h4");
    let poster = document.createElement("img");
    let plot = document.createElement("p");
    plot.setAttribute('id','plot');
    let awards = document.createElement("h3");
    let imdbrating = document.createElement("h3");
    title.innerText = data.Title;
    releaseDate.innerText = "Released : " + data.Released;
    poster.src = data.Poster;
    plot.innerText = '" '+ data.Plot + ' "';
    imdbrating.innerText = "IMDB Rating : " +data.imdbRating; 
    if(data.awards == undefined){
        awards.innerText = "";
    }else{
        awards.innerText = "Awards : "+ data.awards;
    }
    if(data.imdbRating >= 8.5){
        let recomBox = document.createElement("div");
        recomBox.setAttribute('id','recomBox');
        recomBox.innerText = "Recommended";
        container.append(recomBox,title,releaseDate,poster,awards,imdbrating,plot);
    }else{
        container.append(title,releaseDate,poster,awards,imdbrating,plot);
    }
    }
}
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