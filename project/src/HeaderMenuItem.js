import React from "react";
import PropTypes from 'prop-types';

class MenuItem extends React.Component
{
    render()
    {
        return (
            <li className="nav-item">
                <a className="nav-link" href={this.props.href}>{this.props.children}</a>
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