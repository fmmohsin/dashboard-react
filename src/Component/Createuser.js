import React from 'react';
import './Createuser.css'

const Createuser = (props) => {
    const userDetails = {
        username: '',
        description: ''
    }
    const onInputBlur = (event) => {
        if (event.target.id === 'username')
            userDetails.username = event.target.value
        else if (event.target.id === 'description')
            userDetails.description = event.target.value
    }
    return (
        <div className="user-create-card bg-color">
            <span className="flex-col">
                <label htmlFor='username'>Name</label>
                <input placeholder='Enter here' type='text' id='username' onBlur={onInputBlur}></input>
            </span>
            <span className="flex-col">
                <label htmlFor='description'>Description</label>
                <textarea id='description' onBlur={onInputBlur}></textarea>
            </span>
            <button className="create-bg-color" onClick={props.onUserCreate.bind(this, userDetails)}>Create User</button>
        </div>
    );
}

export default React.memo(Createuser);