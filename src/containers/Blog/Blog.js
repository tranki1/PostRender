import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        selectedPostID:null
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts=response.data.slice(-5,response.data.length);
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
    postSelectedHandler=(id)=>{
        this.setState({selectedPostID:id})
    }

    render () {
        const updatedPosts = this.state.posts.map(
            post=>{
                return (
                    <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author}
                        clicked={()=>this.postSelectedHandler(post.id)}/>
                )
            }
        )
        return (
            <div>
                <section className="Posts">
                    {updatedPosts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostID}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;