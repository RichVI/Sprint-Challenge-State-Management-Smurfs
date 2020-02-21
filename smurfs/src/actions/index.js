import axios from 'axios';

export const FETCH_SMURFS_DATA='FETCH_SMURFS_DATA';
export const FETCH_SMURFS_SUCCESS='FETCH_DATA_SUCCESS';
export const FETCH_SMURFS_FAILED='FETCH_SMURFS_FAILED'

export const POST_SMURF_DATA='POST_SMURF_DATA';
export const POST_SMURF_SUCCESS='POST_SMURF_SUCCESS';
export const POST_SMURF_FAILED='POST_SMURFS_FAILED';

// Axios GET - Get smurfs
export const fetchSmurfData = () => {
    return dispatch => {
        dispatch({type: FETCH_SMURFS_DATA})
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log("FETCH res", res);
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data}) 
        })
        .catch(err => {dispatch({type: FETCH_SMURFS_FAILED, payload: err})})
    }
}

// Axios POST - Add smurf
export const addNewSmurf = newSmurf => {
    console.log("addNewSmurf Action", newSmurf)
    return dispatch => {
        dispatch({type: POST_SMURF_DATA})
        axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log("POST res",res);
            dispatch({type: POST_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {dispatch({type: POST_SMURF_FAILED, payload: err})})
    }
}