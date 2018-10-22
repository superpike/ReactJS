import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

export default class Layout extends React.Component
{
    constructor(props)
    {
        super(props);
        this.brand = 'Список покупок';
    }

    /**
     * Вычисление активного пункта меню
     * @param href
     * @return {boolean}
     */
    isActive(href)
    {
        return window.location.pathname === href;
    }

    render(){
        return (
            <div>
                <Menu brand={this.brand}>
                    <MenuItem href="/list" active={this.isActive('/list')}>
                        Список
                    </MenuItem>
                    <MenuItem href="/quickList" active={this.isActive('/quickList')}>
                        Ежедневные покупки
                    </MenuItem>
                    <MenuItem href="/waitingList" active={this.isActive('/waitingList')}>
                        Лист ожидания
                    </MenuItem>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <footer>
                    <hr/>
                    &copy; 2018 Паклин Игорь Викторович
                </footer>
            </div>);
    }
}