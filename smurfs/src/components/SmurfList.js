import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchSmurfData, addNewSmurf, deleteSmurf } from '../actions';
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
            {props.isLoading && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
            )}
            {props.smurfs && !props.isLoading && (
                <div>
                    <SmurfForm addNewSmurf={props.addNewSmurf}/>
                    <div className="smurfList">
                        {props.smurfs.map(smurfs=>(
                            <SmurfCard key={smurfs.id} smurfs={smurfs} deleteSmurf={props.deleteSmurf}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )};
            
const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      error: state.error
    }
  }
  
export default connect(mapStateToProps, {fetchSmurfData, addNewSmurf, deleteSmurf})(SmurfList);
