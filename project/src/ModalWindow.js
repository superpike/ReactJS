import React from "react";
import PropTypes from 'prop-types';

class ModalWindow extends React.Component
{
    render(){
        return (
            <div className="modal fade" id="modalWindow" tabIndex="-1" role="dialog" aria-labelledby="modalWindowLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalWindowLabel">Авторизация</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="login">Имя пользователя: </label>
                            <input type="text" name="login" id="login" placeholder="User name"/>
                            <label htmlFor="pass">Пароль: </label>
                            <input type="password" name="pass" id="pass" placeholder="Password"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Войти</button>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default ModalWindow;