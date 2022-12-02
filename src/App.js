import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Buy Milk',
      complete: false
    },
    {
      text: 'Go Jogging',
      complete: true
    },
    {
      text: 'Make money',
      complete: false
    }
  ]);

  return (
    <div className="App">
      <Header />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
