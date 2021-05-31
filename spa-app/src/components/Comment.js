import React, {useState} from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function Comment({comments}) {
    return comments.map((comment, index) => (
        <div key={index}>
            <div>{comment.text}</div>
        </div>

    ))
}

export default Comment
