
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import React from 'react';
import { CreateTodoButton } from './CreateTodoButton.js';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];

function App() {
  return (
    <React.Fragment>

    <TodoCounter completed={16} total={20}/>
    <TodoSearch/>

    <TodoList>
    {defaultTodos.map(todo => (
      <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
      />
    ))}
  </TodoList>

    <CreateTodoButton />


    </React.Fragment>
  );
}



// function TodoCounter() {
//   return(
//     <h1>
//     Has completado 3 de 5 Todos 
//     </h1>

//   );
// }
export default App;
