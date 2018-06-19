import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        posts:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts=response.data.slice(0,10);
            const updatedPosts = posts.map(post=>{
                return{
                    ...post,
                    author:'Kim'
                }
            })
            this.setState({posts:updatedPosts});
            console.log(this.state.posts);
        });
    }
    render () {
        const updatedPosts = this.state.posts.map(
            post=>{
                return (
                    <Post key={post.id} title={post.title} author={post.author}/>
                )
            }
        )
        return (
            <div>
                <section className="Posts">
                    {updatedPosts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;