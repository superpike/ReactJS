import React from 'react';
import Logo from './Logo';
import Menu from './HeaderMenu';
import Phone from './Phone';


class Header extends React.Component {
    render() {       
        const menuItems = [
            {href: "#", active:false, title: "Каталог"},
            {href: "#", active:true, title: "Услуги"},
            {href: "#", active:false, title: "Доставка и оплата"},
            {href: "#", active:false, title: "О нас"},
            {href: "#", active:false, title: "Наши работы"},
            {href: "#", active:false, title: "Отзывы"},
            {href: "#", active:false, title: "Контакты"},
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