import React from 'react';

const People = props => (
  <div className={props.design}>
    {Object.keys(props.data).map((key, i) => (
      <div key={i}>
        <span>{key}:</span>
        <span>{props.data[key]}</span>
      </div>
    ))}
  </div>
);

export default People;
