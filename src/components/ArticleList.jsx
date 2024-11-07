import { useEffect, useState } from "react"
import { fetchArticles } from "../../axios"
import ArticleCard from "./ArticleCard"
import { Link } from "react-router-dom"

//make api call to get all articles
//use all articles to generate article card
//use a map to return articles
//useEffect

export default function ArticleList() {
    const [isLoading, setIsLoading] = useState(true)
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
                return <Link to={`/articles/${article.article_id}`} key={article.article_id}>  <ArticleCard article={article}></ArticleCard>
                </Link>
            })}

        </ul>
    )
}