import React from 'react';
import '../styles/style.css';
import { deleteProduct } from '../actions/shoppingActions';

export default class PostItem extends React.Component
{
    constructor()
    {
        super(...arguments);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() 
    {
        this.props.dispatch(deleteProduct(this.props._id));
    }

    render()
    {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <h3 className="panel-title">
                        {this.props.name}
                        {this.props.marketplace ? ' (' + this.props.marketplace + ')' : ''}
                        <span>, кол-во: </span>
                        <input className="smallInput" type="number" defaultValue={this.props.quantity}/>
                        {/* <button className="btn btn-primary" onClick={"list/edit/"+this.props._id}>Редактировать</button>
                        <button className="btn btn-danger" onClick={"list/delete/"+this.props._id}>Удалить</button> */}
                        {/* <button className="btn btn-primary">Редактировать</button> */}
                        <button className="btn btn-danger btn-del" data-id={this.props._id}>Удалить</button>
                    </h3>
                </div>
            </div>
        );
    }
}