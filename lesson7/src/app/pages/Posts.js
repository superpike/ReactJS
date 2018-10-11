import React from 'react';
import {Link} from 'react-router';
import {getPosts,showPosts} from '../actions/postActions';
import PostLists from '../components/PostLists';
import {connect} from 'react-redux';

class Posts extends React.Component {
    componentDidMount()
    {
        //Action
        if (!this.props.posts.length)
        {
            this.props.dispatch(getPosts());
        } 
        // else {
        //     this.props.dispatch(showPosts());
        // }
    }

    render() {
        if(this.props.is_loading){
            return <div>Данные загружаются...</div>
        }

        return (
            <div>
                <Link className="btn btn-primary" to={`/posts/new`}>
                    Добавить пост
                </Link>
                <PostLists posts={this.props.posts}/>
                }
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        posts: store.posts.posts,
        is_loading: store.posts.is_loading,
    }
}

export default connect(mapStateToProps)(Posts);