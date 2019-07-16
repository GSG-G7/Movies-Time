const newsContainer = document.getElementById('news');

function showNews(obj){
    const newsbox = document.createElement('div');
    const newsImag = document.createElement('img');
    const title = document.createElement('h2');
    const desc = document.createElement('p');
    const source = document.createElement('a');
    
    // Set attributes
    newsImag.setAttribute('src' , obj.imageLink);
    title.textContent= obj.title;
    desc.textContent=obj.description;
    source.textContent = "Read More"
    source.setAttribute('href' , obj.source ) ;
    source.setAttribute('target' , '_blank' ) ;

    // Append
    newsbox.appendChild(newsImag);
    newsbox.appendChild(title);
    newsbox.appendChild(desc);
    newsbox.appendChild(source);

    newsContainer.appendChild(newsbox);
    
    
}

function fetchNews(newArr){
    newArr.forEach(element => {
        showNews(element);
    });

}


getNews(queryNews, news=>{

    const newArr = [];

    for(let i= 0 ; i < 6 ; i++){
        let obj ={
            imageLink: news[i].urlToImage,
            title: news[i].title,
            description : news[i].description,
            source :news[i].url,
            author: news[i].author,
            published :news[i].publishedAt,
        }
        newArr.push(obj);
        
    }
    fetchNews(newArr);
});



