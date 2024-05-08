import React, { useEffect, useState } from 'react';
import Country from './Country';
import './Countries.css'

const Countries = () => {
    const [countries, setcountries] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(r => r.json())
        .then(list => setcountries(list));
    }, [])
return (
    <div className='container'>
        {/* <h1>Hello: {countries.length}</h1> */}
        {
            countries.map(country=><Country name={country.name} email={country.email}></Country>)
        }
    </div>
);
};

export default Countries;