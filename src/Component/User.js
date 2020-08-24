import React from 'react';
import './User.css'
const User = (props) => {
    return (
        <div className="user-card bg-color">
            <span className="flex-col">
                <label htmlFor='username'>Name</label>
                <div className='username'>{props.user.username}</div>
            </span>
            <span className="flex-col">
                <label>Description</label>
                <div className='description'>{props.user.description}</div>
            </span>
            <button className="delete-bg-color" onClick={props.onRemoveUser}>Delete User</button>
        </div>
    );
}

export default React.memo(User);