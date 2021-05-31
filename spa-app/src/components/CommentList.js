import React, {useState} from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { ToastBody } from 'react-bootstrap';

function CommentList() {
    const[comments, showComments] = useState([]);

    const addComment = comment => {
        if(!comment.text ||/^\s*$/.test(comment.text)) {
            return
        };

        const newComments = [comment, ...comments];

        showComments(newComments);
    };

    const showAll = id => {
        let updatedComments = comments.map(comment => {
            if(comment.id === id) {
                comment.isComplete = !comment.isComplete;
            }
            return comment;
        });
        showComments(updatedComments);
    };


    return (
        <div>
           <p className="card-title">TESTIMONIALS</p>
           <CommentForm onSubmit={addComment}></CommentForm>
           <Comment comments={comments}></Comment>
        </div>
    )
}

export default CommentList
