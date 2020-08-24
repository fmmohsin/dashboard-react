import React,{useState} from 'react';
import './Createuser.css'

const Createuser = (props) => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        description: ''
    });
    const onInputBlur = (event) => {
        if (event.target.id === 'username')
        setUserDetails({username:event.target.value,description:userDetails.description})
        else if (event.target.id === 'description')
        setUserDetails({username:userDetails.username,description:event.target.value})
    }


    const onUserCreate=()=>{
        props.onUserCreate(userDetails)
        setUserDetails({username:'',description:''})
    }
    return (
        <div className="user-create-card bg-color">
            <span className="flex-col">
                <label htmlFor='username'>Name</label>
                <input placeholder='Enter here' type='text' id='username' value={userDetails.username} onChange={onInputBlur}></input>
            </span>
            <span className="flex-col">
                <label htmlFor='description'>Description</label>
                <textarea id='description' value={userDetails.description} onChange={onInputBlur}></textarea>
            </span>
            <button className="create-bg-color" onClick={onUserCreate}>Create User</button>
        </div>
    );
}

export default React.memo(Createuser);