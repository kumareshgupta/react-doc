import React from 'react'

function Person({person, key}){
    return (
        <div>
            <h2>
                {key}I am {person.name}, {person.age} years old, know {person.skill}
            </h2>
        </div>
    )
}

export default Person