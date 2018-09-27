import React from 'react';

class Phone extends React.Component {
    render() {
        return (
            <div className="navbar-text b-header__phone">
                <i className="fas fa-mobile-alt b-header__icon"></i>
                <div>
                    <div className="b-header__phone-number">
                        +7 (343) 310 01 02
                    </div>
                    <button type="button" className="btn btn-success b-header__call" data-toggle="modal" data-target="#modalWindow">
                        заказать звонок
                    </button>
                </div>
            </div>
        );
    }
}

export default Phone;