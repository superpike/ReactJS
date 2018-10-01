import React from "react";
import PropTypes from 'prop-types';

class MenuItem extends React.Component
{
    render()
    {
        let activeClass = "";
        if (this.props.active) {
            activeClass = " active";
        }
        return (
            <li className="nav-item">
                <a className={"nav-link" + activeClass} href={this.props.href} onClick={this.props.clickOnItem}>{this.props.children}</a>
            </li>
        );
    }
}

MenuItem.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
    children: "------",
    href: "/"
};

export default MenuItem;