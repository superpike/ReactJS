import React from 'react';
import PostItemChange from '../components/PostItemChange';

export default class Post extends React.Component
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