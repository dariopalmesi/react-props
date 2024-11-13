import CardImage from '../../assets/img/487c8193-0cce-4b89-aee2-74f2574abeb6.webp'
import Button from '../Button/Button'


export default function CardBlog() {
    return (
        <div className="card-blog">
            <img src={CardImage} alt="" />
            <div className="diteils">
                <h3>Il mio Mac</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus distinctio expedita iusto in fugit alias at dolore, perspiciatis omnis minus ex. Culpa ut et necessitatibus. Itaque harum aliquam esse!</p>
                <Button />
            </div>
        </div>
    )
}