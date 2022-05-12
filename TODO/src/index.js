import './styles.css';

import { Todo, TodoList } from './classes';


export const todoList = new TodoList();

const tarea = new Todo('Aprender JS');
const tarea2 = new Todo('Almorzar');

todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea2 );

console.log(todoList);
