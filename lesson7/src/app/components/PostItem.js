import React from 'react';
import {Link} from 'react-router';

export default class PostItem extends React.Component
{
    render()
    {
        let showButtons = false;
        let edit = false;
        if (this.props.showButtons) {
            showButtons = true;
            if (this.props.params.postId != "new") {
                edit = true;
            }
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <Link to={{pathname:`/posts/${this.props.id}`,state:this.props}}>
                            {this.props.title}
                        </Link>
                    </h3>
                </div>
                <div className="panel-body">
                    <div>{this.props.body}</div>
                </div>
            </div>
        );
    }
}