import ArticleList from "./ArticleList"


export default function ArticleCard(props) {
    const { article } = props

    return (
        <section className="article-card" >
            <div>
                <h3>{article.title}</h3>
                <ul id="article-card-list">
                    <img src={article.article_img_url} alt="article card thumbnail" height="150px" />
                    <li>Likes: {article.votes}</li>
                    <li>Date: {article.created_at}</li>
                </ul>
            </div>
        </section>
    )

}