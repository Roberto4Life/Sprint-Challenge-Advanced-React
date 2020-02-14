import React from 'react';
import './App.css';

function Cards(props) {
    return(
        <>
            {props.people.map(people => (
                <div key={people.id} className="people">
                    <p>{people.name}</p>
                    <p>{people.country}</p>
                    <p>{people.searches}</p>
                </div>
            ))}
        </>
    );
}
export default Cards;