import React from "react";
import PropTypes from 'prop-types';
import FooterMenu from './FooterMenu';

class Articles extends React.Component
{
    render(){
        return (
            <article className={"b-footer__item b-footer__item_"+this.props.numOrder}>
                <h3 className={"b-footer__heading "+this.props.titleClass}>{this.props.title}</h3>
                <FooterMenu data={this.props.data} classData={this.props.classData}/>
            </article>
        );
    }
}

//Свойства по умолчанию
Articles.defaultProps = {
    data: []
};

//Проверка типов
Articles.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Articles;