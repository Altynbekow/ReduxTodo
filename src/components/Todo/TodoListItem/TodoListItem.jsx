


import React from 'react';

const TodoListItem = (props) => {
  return (
      <div>
        {props.text}{'  '}{props.number}
      </div>
  );
};

export default TodoListItem;
