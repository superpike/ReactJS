import React from "react";
import PropTypes from 'prop-types';
import MenuItem from './HeaderMenuItem';

class Menu extends React.Component
{
    constructor(props)
    {
        super(props);
        this.clickOnItem = this.clickOnItem.bind(this);
        //Определяем состояние компонента
        this.state = {
            activeItem: this.props.items.filter((el) => el.active)
        };
    }

    clickOnItem(e) {
        this.setState({
            activeItem: this.props.items.filter((el) => el.title == e.target.text)
        });
    }

    render(){
        let items = this.props.items.map((item, index) => {
            return <MenuItem key={index} active={(this.state.activeItem.indexOf(item) != -1)} clickOnItem={this.clickOnItem} href={item.href}>{item.title}</MenuItem>;
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