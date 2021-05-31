import React, {useState} from 'react'

function CommentForm(props) {
    const [comment, addComment] = useState('');

    const handleChange = e => {
        addComment(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: comment
        });

        addComment('');

    }

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a comment about your experience" value={comment} name="text" className="comment-form" onChange={handleChange}></input>
            <button className="btn btn-light">Submit</button>
        </form>
    )
}

export default CommentForm;
