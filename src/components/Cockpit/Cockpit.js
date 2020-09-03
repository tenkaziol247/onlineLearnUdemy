import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    toggleBtnRef.current.click();
    return () => {
      console.log('Cockpit cleanup work')
    }
  }, []);

  let assignedClasses = [];
  let btnClass = '';

  if (props.isShowPerson) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm react app</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Person</button>
    </div>
  )
};


export default Cockpit;