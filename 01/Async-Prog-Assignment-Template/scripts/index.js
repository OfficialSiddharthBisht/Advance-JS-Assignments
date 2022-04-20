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
