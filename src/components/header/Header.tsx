import { useState } from 'react';
import './style.scss';
import { Menu } from '../menu/Menu';
import { ProductCard } from '../product-card/ProductCard';

// @ts-ignore
import logo from '../../assets/icons/logo.svg';

// @ts-ignore
import header from '../../assets/images/header/header_img_desktop.png';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cardOpen, setCardOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleCard = () => {
        setCardOpen(!cardOpen);
    };
    return (
        <>
            {menuOpen && <Menu closeMenu={toggleMenu} />}
            {cardOpen && <ProductCard />}

            <header className="header">
                <div className="header__container">
                    <div className="header__topbar">
                        <a href="#menu" className="icon icon__menu" onClick={toggleMenu}></a>

                        <div className="logo">
                            <a href="#" className="logo__link">
                                <img src={logo}
                                    alt="logo"
                                    className="logo__img"
                                />
                                <p className="logo__text">witch of mountain winds</p>
                            </a>
                        </div>

                        <nav className="navbar">
                            <ul className="navbar__list">
                                <li className="navbar__item">
                                    <a href="#shop" className="navbar__link">Shop</a>
                                </li>

                                <li className="navbar__item">
                                    <a href="#contact" className="navbar__link">Contact </a>
                                </li>

                                <li className="navbar__item">
                                    <a href="#about" className="navbar__link">About</a>
                                </li>
                            </ul>
                        </nav>

                        <a href="#" className="icon icon__card" onClick={toggleCard}> </a>
                    </div>

                    <div className="header__main">
                        <div className="header__photo">
                            <img
                                className="header__img"
                                src={header}
                                alt="jars with cosmetics"
                            />
                        </div>

                        <div className="header__content">
                            <h1 className="header__title">
                                Brand of eco-cosmetics <br />
                                and magic candles
                            </h1>
                            <p className="header__text">20% of sales at a wild bird shelter</p>
                            <a href="#shop" className="header__button button">shop</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
