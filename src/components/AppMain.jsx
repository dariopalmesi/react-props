import posts from '../data/Posts.js'
import CardBlog from './CardBlog/CardBlog'

export default function () {
    return (
        <main>
            <div className="container">
                {posts.map(post => <CardBlog key={post.id} posts={posts} />)}
            </div>
        </main>
    )
}