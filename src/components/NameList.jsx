import React from 'react'
import Person from './Person'

function NameList(){
    const names = ['Aniruddh', 'Shashwat', 'Shambhavi', 'Dev' ,'Aniruddh'] 
    const persons = [
        {
            id: 1,
            name: 'Aniruddh',
            age: 12,
            skill: 'Mathematics'
        },
        {
            id: 2,
            name: 'Shashwat',
            age: 17,
            skill: 'Physics'
        }
    ]
    const nameList = names.map( (name, index) => <h2 key={index}>{index}  {name}</h2>)
    return <div>{nameList}</div>
  /*  const personsList = persons.map((person) => 
        <div>
            <h2>I am {person.name}, {person.age} years old, know {person.skill}</h2>
        </div>
    ); */
   // const personsList = persons.map(person =>  <Person key={person.id} person = {person} />)
    //return <div>{personsList}</div>

    //const names = ['Aniruddh', 'Shashwat', 'Shambhavi', 'Dev']
    //const nameList = names.map(name => <h2>{name}</h2>)
    //return <div>{nameList}</div>
   /* return (
        <div>
            <h1>{names.map((name,i) => (<h2>{name}</h2> ))}</h1>    
        </div>
    )*/


   /* const nums = [13,14,17,18]
    const map1 = nums.map(x => x*2)
    console.log(map1)
    return (
        <div>
            {map1}
            {console.log(map1)}
        </div>
    ) */
}

export default NameList