import React from 'react';

let compliteStyles = {
  color: "grey",
  textDecoration: "line-through",
  fontStyle: 'italic'
}

let TodoItem = (props) => {
    return (
      <div className="todoItem">
        <input type="checkbox" onChange={() => props.handleChange(props.idTask)} checked={props.completed}/>
        <p style={ props.completed ? compliteStyles : null}>{props.text}</p>
      </div>
    )
}

export default TodoItem;