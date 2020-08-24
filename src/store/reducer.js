import * as actionTypes from './actions';

const initialState = {
    teams: [],
    users: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TEAM: {
            return {
                ...state,
                teams: state.teams.concat({ name: action.payload, id: state.teams.length + 1 + action.payload }),
                users: { ...state.users, [state.teams.length + 1 + action.payload]: [] }
            }
        }
        case actionTypes.ADD_USER: {
            let users = state.users[action.payload.teamId].concat();
            users.push({ ...action.payload.userdetails, id: users.length + 1 + action.payload.userdetails.username })
            return {
                ...state,
                users: { ...state.users, [action.payload.teamId]: users }
            }
        }
        case actionTypes.REMOVE_USER:{
            return {
                ...state,
                users: { ...state.users, [action.payload.teamId]:  state.users[action.payload.teamId].filter(user=> user.id!==action.payload.userId)}
            }
        }
        default:
            return state;
    }
    return state;
};

export default reducer;