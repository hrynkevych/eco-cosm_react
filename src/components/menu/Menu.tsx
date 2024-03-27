import './style.scss';

type CloseMenuFunction = () => void;

interface MenuProps {
    closeMenu: CloseMenuFunction;
}

export const Menu: React.FC<MenuProps> = ({ closeMenu }) => {

    return (
        <aside className="page__menu menu" id="menu">
            <div className="menu__content">
                <div className="icon-close">
                    <a href="#" className="icon-close__link" onClick={closeMenu}> </a>
                </div>
                <nav className="menu__nav">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a href="#shop" className="menu__link">Shop</a>
                        </li>

                        <li className="menu__item">
                            <a href="#contact" className="menu__link">Contact </a>
                        </li>

                        <li className="menu__item">
                            <a href="#about" className="menu__link">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
