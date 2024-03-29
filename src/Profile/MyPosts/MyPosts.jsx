import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {

  let postData =[
    {id: 1, message: 'Hi, how are you?', likesCount: 23},
    {id: 2, message: 'It is my first post.', likesCount: 11}
  ]

	return(
		<div className={s.postsBlock}>
    <h3>My posts</h3>
      <div>        	       
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
        <div className={s.posts}>0
        <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
	);
}

export default MyPosts;