import posts from '../data/Posts.js'
import CardBlog from './CardBlog/CardBlog'

export default function AppMain() {
    const published_true = posts.filter(post => post.published === true)


    return (
        <main>
            <div className="container">
                {published_true.map(post => <CardBlog key={post.id} post={post} />)}
            </div>
        </main>
    )
}