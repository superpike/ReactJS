import React from 'react';
import {Link} from 'react-router';

export default class CommentItem extends React.Component
{
    render()
    {
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">
                        {this.props.name}
                    </h3>
                    <p className="card-text">
                        {this.props.body}
                    </p>
                </div>
                <div className="card-footer text-muted">
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}