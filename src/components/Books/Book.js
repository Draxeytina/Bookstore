import React from 'react';

export default function Book() {
  return (
    <li>
      Title:
      {/* {props.title} */}
      by
      {/* {props.author} */}
      <button type="button">Delete</button>
    </li>
  );
}
