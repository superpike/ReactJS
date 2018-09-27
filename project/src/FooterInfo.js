import React from "react";
import PropTypes from 'prop-types';
import Articles from './Articles';

class FooterInfo extends React.Component
{
    render(){
        let articles = this.props.articles.map((item, index) => {
            return <Articles key={index} numOrder={index+1} data={item.data} title={item.title} classData={item.classData} titleClass={item.titleClass}></Articles>;
        });

        return (
            <div className="container">
                <div className="b-footer__info">
                    {articles}
                </div>
            </div>
        );
    }
}

//Свойства по умолчанию
FooterInfo.defaultProps = {
    articles: []
};

//Проверка типов
FooterInfo.propTypes = {
    articles: PropTypes.array.isRequired,
};

export default FooterInfo;