import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((item, index) => {
    return <Person
        name={item.name}
        age={item.age}
        valueCurrent={item.name}
        key={item.id}
        changed={(event) => props.changed(event, item.id)}
        click={() => props.clicked(index)} />
}
);

export default persons;