import React, { useState } from 'react';

export const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        id: Date.now(),
        name: '',
        age: '',
        height: ''
    });

    const handleChange = e =>{
        setNewSmurf({
        ...newSmurf,
        [e.target.name]: e.target.value
    })}

    const handleSubmit = e =>{
        e.preventDefault();
        props.addNewSmurf(newSmurf);
        setNewSmurf({name:'', age: '', height: ''});
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'> Name </label>
            <input name="name" type="text" value={newSmurf.name} onChange={handleChange} placeholder="Name" required/>
            <label htmlFor='age'> Age </label>
            <input name="age" type="number" min="0" value={newSmurf.age} onChange={handleChange} placeholder="Age" required/>
            <label htmlFor='height'> Height </label>
            <input name="height" type="text" value={newSmurf.height} onChange={handleChange} placeholder="Height" required/>
            <button>Add New Smurf</button>
        </form>
    )
}