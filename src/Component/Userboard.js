import React, { Fragment } from 'react'
import Createuser from './Createuser'
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import User from './User'
import './Userboard.css'
const UserBoard = (props) => {
    console.log(props)
    const team = props.teams.filter((team) => props.id === team.id)
    return (
        <Fragment>
            <div className="user-board">
                <h3>{team[0].name}</h3>
                < hr />
                <div className="user">
                    <Createuser onUserCreate={props.onAddUser} />
                    {props.users.map((user) => {
                        return <User key={user.id} user={user} onRemoveUser={props.onRemoveUser.bind(this, user.id)} />
                    })}
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state, props) => {
    return {
        teams: state.teams,
        users: state.users[props.id]
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddUser: (userDetails) => dispatch({ type: actionTypes.ADD_USER, payload: { teamId: ownProps.id, userdetails: userDetails } }),
        onRemoveUser: (id) => dispatch({ type: actionTypes.REMOVE_USER, payload: { teamId: ownProps.id, userId: id } })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(UserBoard);