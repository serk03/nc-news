import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://nc-news-8v2m.onrender.com/api",
    timeout:5000,
});

export function fetchArticles(){
    return apiClient.get('/articles').then((response)=>{
        
        return response.data.articles
    })   
}

export function fetchArticle (article_id) {
    return apiClient.get(`/articles/${article_id}`).then((response)=>{
        console.log(response.data);
        return response.data.article
    })
}