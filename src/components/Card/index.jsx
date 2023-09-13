import styled from './card.module.css'


export default function Card({ nome, image, link }) {
    return (
        <div className={styled.cards}>
            <img src={image} alt="9qvWEF.jpeg" className={styled.modelPicture}/>
                <h1 className={styled.cardTitle}>{ nome }</h1>
                <div className={styled.shoppingContainer}>
                    <a href='link' className={styled.basketButton}>Ver curriculo</a>
                </div>
        </div>
    )
}