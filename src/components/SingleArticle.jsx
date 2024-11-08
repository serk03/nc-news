import { fetchArticle } from "../../axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function SingleArticle() {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [article, setArticle] = useState([])
    const { article_id } = useParams()
    console.log(article_id);


    useEffect(() => {
        fetchArticle(article_id)
            .then((article) => {
                setArticle(article)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setIsError(true)
                console.log(err);
            })
    }, [article_id])
    if (isError) {
        return <p>Oh no! An error 😬</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div >
            <h4 >{article.title}</h4>
            <img src={article.article_img_url} alt="article image" />
            <p>Likes:{article.votes}</p>

            <button>Thumb Up</button>
            <button>Thumb Down</button>
            <div>

                <p>{article.body}</p>
            </div>
            <div>
                <input type="text" />
                <button>Add</button>
            </div>
        </div>
    )
}