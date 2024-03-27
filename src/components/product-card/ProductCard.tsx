// Product card layout for demonstration only. 
// Full version should be interactive and integrated with a shop. 

import './style.scss';

// @ts-ignore
import img from '../../assets/images/product_card/mobile/product_card.png';

export const ProductCard: React.FC = () => {
    return (
    <div className="product-card">
        <h5 className="product-card__title">
            Hydrophilic oil
        </h5>
        
        <p className="product-card__price">160 UAH</p>

        <div className="product-card__photo">
            <img
                className="product-card__img"
                src={img}
                alt="Hydrophilic oil"
            />
        </div>

        <div className="product-card__button button">Add to bag</div>
        
        <p className="product-card__description">
            Ingredients: cocosulfate, aloe hydrolate, sweet almond oil, wheat proteins, chamomile grass, lavender essential oil. <br />
            Application: foam the shampoo in your hands and apply foam on the hair or draw a block over wet hair, foam, massage, rinse, apply balm or conditioner.
        </p>
    </div>
    );
}