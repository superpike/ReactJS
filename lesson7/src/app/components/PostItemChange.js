import React from 'react';
import {addPost, editPost, deletePost} from '../actions/postActions';
import '../styles/style.css';

export default class PostItemChange extends React.Component
{
    constructor() 
    {
        super(...arguments);
        this.newPost = this.newPost.bind(this);
        this.savePost = this.savePost.bind(this);
        this.removePost = this.removePost.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    newPost(title, body)
    {
        let userId = 1;
        //Action
        this.props.dispatch(addPost(title, userId, body));
    }

    savePost(title, body)
    {
        let userId = this.props.location.state.userId;
        let id = this.props.location.state.id;
        //Action
        this.props.dispatch(editPost(
            id, 
            title, 
            userId, 
            body
        ));
    }

    removePost()
    {
        let {id, title, userId, body} = this.props.location.state;
        //Action
        this.props.dispatch(deletePost(id, title, userId, body));
    }

    handleAdd()
    {
        this.newPost(this.refs.title.value,this.refs.body.value);
        this.props.router.push({
            pathname: '/posts'
          });
    }

    handleEdit()
    {
        this.savePost(this.refs.title.value,this.refs.body.value);
        this.props.router.push({
            pathname: '/posts'
          });
    }

    handleDelete()
    {
        this.removePost();
        this.props.router.push({
            pathname: '/posts'
          });
    }

    handleClose()
    {
        this.props.router.push({
            pathname: '/posts'
          });
    }

    render()
    {
        let edit = false;
        let title = "";
        let body = "";
        if (this.props.params.postId != "new") {
            edit = true;
            title = this.props.location.state.title;
            body = this.props.location.state.body;
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <input type="text" defaultValue={title} ref="title"/>
                    </h3>
                </div>
                <div className="panel-body">
                    <textarea cols='150' rows ='20' defaultValue={body} ref="body"/>
                </div>
                {
                    <div>
                        {
                            edit
                            ?
                            <span>
                                <button className="btn btn-primary rightMargin" onClick={this.handleEdit}>
                                    Сохранить
                                </button>
                                <button className="btn btn-danger rightMargin" onClick={this.handleDelete}>
                                    Удалить
                                </button>
                            </span>
                            :
                            <button className="btn btn-primary rightMargin" onClick={this.handleAdd}>
                                Добавить
                            </button>
                        }
                        <button className="btn btn-info" onClick={this.handleClose}>
                            Закрыть
                        </button>
                    </div>
                }
            </div>
        );
    }
}