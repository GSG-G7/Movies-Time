const urlNews = "https://newsapi.org/v2/everything?";
const queryNews ="q=movie&from=2019-06-16&sortBy=publishedAt";
const newsAPI_key = "&apiKey=c97ecb4a147a402899bf700fb3acf8e5";



function getNews(query, callback){
    const newsUrl = urlNews + query + newsAPI_key ;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange= _=>{
        if (xhr.readyState ===4 && xhr.status ===200){
            const obj = JSON.parse(xhr.responseText);
            // console.log(obj.articles);
            callback(obj.articles);
        }
    }
    xhr.open('GET',newsUrl);
    xhr.send();
}



// function receiveNews(arr){
//     const arrObjNews = []; 

//     arr.some(function (element , index){        
//         arrObjNews.push(element);
//         return index === 4;
//     });
//     return arrObjNews;    
// }






