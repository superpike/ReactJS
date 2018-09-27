import React from "react";
import PropTypes from 'prop-types';
import MenuItem from './HeaderMenuItem';

class Menu extends React.Component
{
    render(){
        let items = this.props.items.map((item, index) => {
            return <MenuItem key={index} href={item.href}>{item.title}</MenuItem>;
        });

        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">                    
                    {items}
                </ul>
            </div>
        );
    }
}

//Свойства по умолчанию
Menu.defaultProps = {
    items: []
};

//Проверка типов
Menu.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Menu;