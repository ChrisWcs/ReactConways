import { ADVANCE } from '../actions/actions';


const mainReducer = (state, action) => {
    switch(action.type){

        case ADVANCE:
            return state;
        default:
            return state;
    }
};

export default mainReducer;