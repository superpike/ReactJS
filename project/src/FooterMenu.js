import React from "react";
import PropTypes from 'prop-types';
import FooterMenuItem from './FooterMenuItem';

class FooterMenu extends React.Component
{
    render(){
        let items = this.props.data.map((item, index) => {
            return <FooterMenuItem key={index} icon={item.icon} classData={item.classData} text={item.text} text2={item.text2}/>;
        });

        return (
            <ul className={"b-footer__" + this.props.classData}>
                {items}
            </ul>
        );
    }
}

//Свойства по умолчанию
FooterMenu.defaultProps = {
    data: []
};

//Проверка типов
FooterMenu.propTypes = {
    data: PropTypes.array.isRequired,
};

export default FooterMenu;