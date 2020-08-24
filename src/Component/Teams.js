import React from 'react'
import { connect } from 'react-redux';
import './Teams.css'
const Teams = (props) => {
    return (
        <div className='teams'>
            <h4>Teams</h4>
            <ul>
                {props.teams.map((team) => {
                    const style = props.selectedItem === team.id ? 'selected-item' : ''
                    return <li className={style} key={team.id} onClick={props.onItemSelected.bind(this, team.id)}>{team.name}</li>
                })}
            </ul>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        teams: state.teams
    };
};
export default connect(mapStateToProps)(Teams);