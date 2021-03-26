import './Todo/TodoList'
import './App.css';
import TodoList from "./Todo/TodoList";

function App() {
    const todos = [
        {id: 1, completed: false, title: 'some text'},
        {id: 2, completed: false, title: 'some text2'},
        {id: 3, completed: false, title: 'some text3'}
    ]

  return (
    <div className="wrapper">
        <h1>Hello wiley!</h1>
        <TodoList todos={todos}/>
    </div>
  );
}

export default App;
