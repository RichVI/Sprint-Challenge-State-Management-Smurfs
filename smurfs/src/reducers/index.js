import { FETCH_SMURFS_DATA, 
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILED, 
    POST_SMURF_DATA, 
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILED,
    DELETE_SMURF_DATA,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILED } from '../actions';

const initialState = {
smurfs: [],
isLoading: false,
error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
    case FETCH_SMURFS_DATA:
        return{
            ...state,
            isloading: true
        }
    case FETCH_SMURFS_SUCCESS:
        return{
            ...state,
            isLoading: false,
            smurfs: action.payload
        }
    case FETCH_SMURFS_FAILED:
        return{
            ...state,
            isLoading: false,
            error: action.payload
        }
            
    case POST_SMURF_DATA:
        return{
            ...state,
            isLoading: true
        }
    case POST_SMURF_SUCCESS:
        return{
            ...state,
            isLoading: false,
            smurfs: action.payload
        }
    case POST_SMURF_FAILED:
        return{
            ...state,
            isLoading: false,
            error: action.payload
        }

    case DELETE_SMURF_DATA:
        return{
            ...state,
            isLoading: false,
        }
    case DELETE_SMURF_SUCCESS:
        return{
            ...state,
            isLoading: false,
            smurfs: action.payload
        }
    case DELETE_SMURF_FAILED:
        return{
            ...state,
            isLoading: false,
            smurfs: action.payload
        }
        
    default:
        return state;
    }
}
