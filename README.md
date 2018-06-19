# Sample posts render

> Render posts to the DOM with React


# example

```js
import React, { Component } from 'react';
import axios from '../../axios';
//setting from axios instance will overwrite global setting.
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        selectedPostID:null,
        error:false
    }

    componentDidMount(){
        axios.get('/posts')
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
        })
        .catch(error=>{
            this.setState({error:true});
        })
    }
    .....
export default Blog;
```

# api
Using sample information from 
```js
https://jsonplaceholder.typicode.com
```



## This is for education purposes

