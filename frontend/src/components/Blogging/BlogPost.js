import React from 'react';

const BlogPost = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default BlogPost;
