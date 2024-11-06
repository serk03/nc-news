

export default function Header() {
    return (
        <div>
            <h1 id="home-heading">NC NEWS</h1>
            <h2 id="context-heading">Home</h2>
            <nav>
                <select name="select" id="article-filter">
                    <option value="">Select a catergory</option>
                    <option value="Most Popular Articles">Most Popular Article</option>
                    <option value="Highest Rated Articles">Highest Rated Articles</option>
                    <option value="Date Created">Date Created</option>
                </select>
                <select name="sort-by-filter" id="sort-by-filter">
                    <option value="">Select a filter</option>
                    <option value="Newest">Most Popular Article</option>
                    <option value="Oldest">Highest Rated Articles</option>

                </select>
            </nav>
        </div>

    )
}