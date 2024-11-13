
import Button from '../Button/Button'


export default function CardBlog({ posts }) {
    return (
        <div className="card-blog">
            <img src={posts.image} alt="" />
            <div className="diteils">
                <h3>{posts.title}</h3>
                <p>{posts.content}</p>
                <p>{posts.tags}</p>
                <p>{posts.published}</p>
                <Button />
            </div>
        </div>
    )
}