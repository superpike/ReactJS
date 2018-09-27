import React from 'react';
import Logo from './Logo';
import Menu from './HeaderMenu';
import Phone from './Phone';


class Header extends React.Component {
    render() {       
        const menuItems = [
            {href: "#", title: "Каталог"},
            {href: "/service", title: "Услуги"},
            {href: "/delivery", title: "Доставка и оплата"},
            {href: "/about", title: "О нас"},
            {href: "/works", title: "Наши работы"},
            {href: "/rolls", title: "Отзывы"},
            {href: "/contacts", title: "Контакты"},
        ];

        return (
            <header className="b-header b-header__zig-zag">
                <div className=" b-header__nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Logo/>
                            <Menu items={menuItems}/>
                            <Phone/>
                        </nav>
                    </div>
                </div>
            </header>            
        );
    }
}

export default Header;