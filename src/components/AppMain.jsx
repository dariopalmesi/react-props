import posts from '../data/Posts.js'
import CardBlog from './CardBlog/CardBlog'

export default function AppMain() {
    return (
        <main>
            <div className="container">
                {posts.map(post => <CardBlog key={post.id} post={post} />)}
            </div>
        </main>
    )
}