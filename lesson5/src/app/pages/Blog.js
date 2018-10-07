import React from 'react';
import axios from "axios/index";
import BlogItem from '../components/BlogItem';

export default class Blog extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            blog: null,
            user: null
        };

        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.blogId}`)
            .then((response) => {
                let blog = response.data;
                axios
                    .get(`https://jsonplaceholder.typicode.com/users/${blog.userId}`)
                    .then((response) => {
                        this.setState({
                            blog: blog, 
                            user: response.data
                    });
                });
            });
    }

    render()
    {
        return (
            <div>
                {this.state.blog && <BlogItem {...this.state.blog} user={this.state.user} />}
            </div>
        );
    }
}