import { useEffect, useState } from "react"
import { fetchArticles } from "../../axios"
import ArticleCard from "./ArticleCard"

//make api call to get all articles
//use all articles to generate article card
//use a map to return articles
//useEffect

export default function ArticleList() {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [Articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles()
            .then((articles) => {
                setArticles(articles)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setIsError(true)
                // console.log(err);
            })
    }, [])

    if (isError) {
        return <p>Oh no! An error 😬</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }


    return (
        <ul id="item-list-card">
            {Articles.map((article) => {
                return <ArticleCard key={article.article_id} author={article.author} title={article.title} topic={article.topic} created_at={article.created_at} votes={article.votes} article_img_url={article.article_img_url} comment_count={article.comment_count}></ArticleCard>
            })}

        </ul>
    )
}