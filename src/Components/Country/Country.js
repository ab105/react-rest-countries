import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flag, population, capital, region} = props.country;//destructuring props.country common ase tai aitake niye destructuring korsi///.......aikane object ke destructuring kora hoyese
    console.log(props.country);
    return (
        <div className="country bg-info">
            <h4 className="text-danger">This is country: {name} </h4>
            <img width='210px' height='100px' src={flag} alt="" />
            <p>Region: {region}</p>
            <p>capital is : {capital}</p>
            <p>Population is : {population}</p>
            
        </div>
    );
};

export default Country;