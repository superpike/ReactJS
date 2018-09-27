import React from "react";
import PropTypes from 'prop-types';

class FooterMenuItem extends React.Component
{
    render(){
        return (
            <li className={"b-footer__" + this.props.classData}>
                <i className={this.props.icon}></i>
                <div className="b-footer__item-text">{this.props.text}<br/>{this.props.text2}</div>
            </li>
        );
    }
}

export default FooterMenuItem;