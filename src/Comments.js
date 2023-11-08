import React, { useState } from 'react';
import './index.css'; // Import your external CSS file

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() === '') {
      return;
    }

    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex flex-row">
        <div className="flex-grow-1 pr-3">
          <div className="form-group mb-0">
            <input
              type="text"
              className="form-control"
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
          </div>
        </div>
        <div className="align-self-end">
          <button className="btn btn-primary" onClick={handleAddComment}>
            Add Comment
          </button>
        </div>
      </div>
      <ul className="list-group mt-3">
        {comments.map((comment, index) => (
          <li key={index} className="list-group-item">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
