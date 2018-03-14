import React from 'react';

const hobbies = 
 [
  { id: 1, name: "pintar"},
  { id: 2, name: "cantar"},
  { id: 3, name: "dormir" },
]


const Section = () => {
  return (
    <section>
      {hobbies.map( (hobbie) =>
        <div>
          <li>{hobbie.name} </li>
        </div>
      )}
    </section>
  )
};

export default Section