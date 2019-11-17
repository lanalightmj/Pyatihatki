import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_qXwNuLa86OEpyg9_UWg8-cOijodR7_RWNuJzFM-EA4IKHk_6w&s' />
        		 {props.message}
        	<div>
        		<span>like</span> { props.likesCount }
        	</div>
        </div>
	);
}

export default Post;