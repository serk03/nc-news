import { fetchArticle } from "../../axios"
import { useEffect, useState } from "react"


export default function SingleArticle() {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [Articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticle()
            .then((article) => {
                setArticles(article)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setIsError(true)
                console.log(err);
            })
    }, [])
    if (isError) {
        return <p>Oh no! An error 😬</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            Article
            console.log(article);
            {/* <img src="" alt="" />
            <button>Thumb Up</button>
            <button>Thumb Down</button>
            <div>
                <h4>Article Details</h4>
                <P>Article Body</P>
            </div>
            <div>
                <input type="text" />
                <button>Add</button>
            </div>
            <p>Likes:</p> */}
        </div>
    )
}