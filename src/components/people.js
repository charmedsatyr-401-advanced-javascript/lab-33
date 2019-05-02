import React from 'react';

const People = props => (
  <ul>
    {props.data &&
      props.data.map((result, i) => (
        <li onClick={() => props.cb(result.url)} key={i}>
          {result.name}
        </li>
      ))}
  </ul>
);

export default People;
