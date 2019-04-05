import React, { useState } from 'react';

import css from './Todos.css';
import TodoItem from '../todo-item/TodoItem';
import Button from '../button/Button';
// import { realpathSync } from 'fs';

// Listi af verkefnum á forsíðu
export default function Todos(props) {
  const [ showCompleted, setShowCompleted ] = useState(true);
  const { data, loading, onFetchNewData } = props;

  function isCompleted() {
    if (!showCompleted) {
      return "Sýna allt";
    }

    return "Fela búið";
  }

  let todos = data.map((item, i) => {
    return <TodoItem key = { i } todo = { item } id = { data[i].id } />
  });

  function hideCompleted() {
    setShowCompleted(!showCompleted);
    onFetchNewData(showCompleted);
  }

  return (
    <React.Fragment>
      { loading && (
        (<p>Hleð verkefnum</p>)
      )}
      <Button
        children = { isCompleted() }
        onclick = { hideCompleted }
        isToggled = { showCompleted }
        />
        <ul className = { css.todos }>
          { todos }        
        </ul>
  </React.Fragment>
  );
}
