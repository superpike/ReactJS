import React from 'react';
import axios from 'axios';
import BlogItem from './BlogItem';

export default class BlogList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            blogs: [],
            users: []
        };

        axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then((responsePosts) => {
                axios
                    .get('https://jsonplaceholder.typicode.com/users/')
                    .then((responseUsers) => {
                        this.setState({
                            blogs: responsePosts.data,
                            users: responseUsers.data
                        })
                    });
            });
    }

    render()
    {
        if(!this.state.blogs.length){
            return null; //Если данные еще загружаются
        };

        let blogs = this.state.blogs.map((item, index) => {
            let user = this.state.users.filter((us) => {
                return us.id == item.userId;
            });
            return <BlogItem key={index} {...item} user={user[0]} />
        });

        return (
            <div>
                <h1>Записи</h1>
                {blogs}
            </div>
        );
    }
}