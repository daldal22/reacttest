import Todo from "../components/Todo";
import { useCallback, useRef, useState } from "react";


export default function Todos() {
  const [todos, setTodos] = useState([
    { id: 1, content: "솔리테어 완성", done: false },
    { id: 2, content: "리액트 복습", done: false },
    { id: 3, content: "알고리즘 풀이", done: false },
  ]);
  
  const nextId = useRef(4);

  const [inputTodos, setNewTodos] = useState('');

  const inputChange = (e) => {
    setNewTodos(e.target.value);
  }

  const addTodo = () => {
    if (!inputTodos.trim()) return;
    const newTodo = {
      id: nextId.current,
      content: inputTodos.trim(),
      done: false,
    };
    nextId.current += 1;
    setTodos([...todos, newTodo]);
    setNewTodos('');
  }

  const checkTodo = (id) => {
    setTodos(todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id))
  })

  const onEdit = useCallback((id, newContent) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, content: newContent } : todo
      )
    );
  }, []);

  console.log(todos)
  return (
    <>
      <div>
        <input type="text" value={inputTodos} onChange={inputChange} />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul>
        {todos.map((todo, i) => <Todo
        key={i}
        todo={todo}
        onToggle={checkTodo}
        onRemove={onRemove}
        onEdit={onEdit}
        />)}
      </ul>
    </>
  );
}
