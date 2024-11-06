import ArticleList from "./ArticleList"


export default function ArticleCard(props) {
    const { author, title, topic, created_at, votes, article_img_url, comment_count
    } = props

    return (
        <section className="article-card">
            <div>
                <h3>{title}</h3>
                <ul id="article-card-list">
                    <img src={article_img_url} alt="article card thumbnail" height="150px" />
                    <li>Likes: {votes}</li>
                    <li>Date: {created_at}</li>
                </ul>
                <ArticleList />
            </div>
        </section>
    )

}