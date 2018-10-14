import React from 'react';
import PostItemChange from '../components/PostItemChange';
import {connect} from 'react-redux';

class Post extends React.Component
{
    render()
    {
        return (
            <div>
                <PostItemChange {...this.props}/>
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

export default connect(mapStateToProps)(Post);