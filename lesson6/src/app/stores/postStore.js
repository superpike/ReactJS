import {
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    GET_POSTS
} from '../constants/postConstants';
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class postStore extends EventEmitter{
    constructor()
    {
        super(...arguments);

        //Для постов
        this.posts = [];

        //bind
        this.getPostsEnd = this.getPostsEnd.bind(this);
        this.change = this.change.bind(this);
        this.addPost = this.addPost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    getPostsEnd(posts)
    {
        this.posts = posts;
        this.change(); //Для уведомления подписанных компонентов
    }

    change()
    {
        this.emit('change', this.posts);
    }

    addPost(post)
    {
        console.log("added", post);
        this.posts.push(post);
        this.change();
    }

    editPost(post)
    {
        console.log("edited", post);
        let index = 0;
        while (index < this.posts.length)
        {
            if (post.id == this.posts[index].id) {
                break;
            }
            index++;
        }
        if (index < this.posts.length) {
            this.posts[index] = post;
        }
        this.change();
    }

    deletePost(post)
    {
        console.log("deleted", post);
        let index = 0;
        while (index < this.posts.length)
        {
            if (post.id == this.posts[index].id) {
                break;
            }
            index++;
        }
        if (index < this.posts.length) {
            this.posts.splice(index,1);
        }
        this.change();
    }

    handleActions(action){
        switch (action.type)
        {
            case ADD_POST: {
                this.addPost(action.payload);
                break;
            }
            case EDIT_POST: {
                this.editPost(action.payload);
                break;
            }
            case DELETE_POST: {
                this.deletePost(action.payload);
                break;
            }
            case GET_POSTS: {
                this.getPostsEnd(action.payload);
                break;
            }
        }
    }
}

const store = new postStore;
dispatcher.register(store.handleActions);
export default store;