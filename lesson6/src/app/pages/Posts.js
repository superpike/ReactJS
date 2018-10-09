import React from 'react';
import {Link} from 'react-router';
import PostStore from '../stores/postStore';
import {getPosts} from '../actions/postActions';
import PostLists from '../components/PostLists';

export default class Posts extends React.Component {
    constructor()
    {
        super(...arguments);

        this.state = {
            posts: []
        };

        //bind
        this.onPostChange = this.onPostChange.bind(this);
    }

    onPostChange(posts){
        this.setState({posts});
    }

    componentDidMount()
    {
        //Action
        if (!PostStore.posts.length)
        {
            getPosts();
        } else {
            this.setState({posts: PostStore.posts});
        }
    }

    componentWillMount()
    {
        PostStore.on('change', this.onPostChange);
    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary" to={`/posts/new`}>
                    Добавить пост
                </Link>
                <PostLists posts={this.state.posts}/>
            </div>
        );
    }
}