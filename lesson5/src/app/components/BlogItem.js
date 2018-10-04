import React from 'react';
import {Link} from 'react-router';
import CommentList from './CommentList';
import '../styles/style.css';

export default class BlogItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.clickOnComments = this.clickOnComments.bind(this);
        this.state = {
            showComments: false
        }
    }

    clickOnComments(e)
    {
        let newState = !this.state.showComments;
        this.setState({
            showComments: newState
        });
    }

    render()
    {
        let comments = "";
        if(this.state.showComments) 
            {
                comments = <CommentList blog={this.props}/>;
            };


        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <Link to={`/posts/${this.props.id}`}>
                            {this.props.title}
                        </Link>
                    </h3>
                </div>
                <div className="panel-body">
                    <p>{this.props.body}</p>
                    <p>
                        <Link to={`/users/${this.props.userId}`}>
                            {(this.props.user) 
                            ? 
                            this.props.user.name
                            : 
                            this.props.userId}
                        </Link>
                    </p>
                </div>
                <div className="panel-footer">
                    <div onClick={this.clickOnComments} className="cur">
                        Комментарии
                    </div>
                    <div>
                        {comments}
                    </div>
                </div>
            </div>
        );
    }
}