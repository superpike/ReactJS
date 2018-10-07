import React from 'react';
import axios from 'axios';
import CommentItem from './CommentItem';

export default class CommentList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            blog: this.props.blog,
            comments: []
        };

        axios
            .get('https://jsonplaceholder.typicode.com/posts/'+this.props.blog.id+'/comments')
            .then((responseComments) => {
                this.setState({
                    comments: responseComments.data
                })
            });
    }

    render()
    {
        if(!this.state.comments.length){
            return null; //Если данные еще загружаются
        };

        let comments = this.state.comments.map((item, index) => {
            return <CommentItem key={index} {...item}/>
        });

        return (
            <div>
                <hr/>
                {comments}
            </div>
        );
    }
}