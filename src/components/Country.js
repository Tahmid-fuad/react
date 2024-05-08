import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='container'>
            <h2>{props.name}</h2>
            <h4>{props.email}</h4>
        </div>
    );
};

export default Country;