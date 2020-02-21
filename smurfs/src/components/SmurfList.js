import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfData, addNewSmurf } from '../actions';
import { SmurfCard } from './SmurfCard';
import { SmurfForm } from './SmurfForm';
import './SmurfList.scss'

const SmurfList = props => {
    console.log("SmurfList props", props)

    const fetchSmurfData = props.fetchSmurfData;
    useEffect(() => {
        fetchSmurfData();
    },[fetchSmurfData])

    return(
        <div>
            <SmurfForm addNewSmurf={props.addNewSmurf}/>
            <div className="smurfList">
            {props.smurfs.map(smurfs=>(
                <SmurfCard key={smurfs.id} smurfs={smurfs}/>
            ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      error: state.error
    }
  }
  
export default connect(mapStateToProps, {fetchSmurfData, addNewSmurf})(SmurfList);
