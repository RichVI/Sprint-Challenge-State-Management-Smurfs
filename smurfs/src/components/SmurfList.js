import React from 'react';
import { SmurfCard } from './SmurfCard';
import { SmurfForm } from './SmurfForm';

const SmurfList = props => {
    return(
        <div>
            SmurfList
            <SmurfForm />
            <SmurfCard />
        </div>
    )
}

export default SmurfList;