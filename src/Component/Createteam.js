import React from 'react';
import Dropdown from './Dropdown'
import './Createteam.css'
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';
const teamDetails = {
    type: '',
    name: ''
}
const Createteam = (props) => {
    const onInputBlur = (event) => {
        if (event.target.id === 'name')
            teamDetails.name = event.target.value
    }
    const onClickType = (type) => {
        teamDetails.type = type;
    }
    return (
        
        <div className="flex-row create-team">
            <span className="flex-col">
                <label htmlFor="teamSelect">Select type</label>
                <Dropdown id="typeSelect" onClickType={onClickType} />
            </span>
            <span className="flex-col">
                <label htmlFor="name">Team name</label>
                <input placeholder='Enter here' type='text' id='name' onBlur={onInputBlur}></input>
            </span>
            <button className="createBtn create-bg-color" onClick={props.onAddTeam.bind(this, teamDetails)}>Create</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTeam: ({name}) => dispatch({type: actionTypes.ADD_TEAM, payload: name}),
    }
};

export default connect(null, mapDispatchToProps)(Createteam);