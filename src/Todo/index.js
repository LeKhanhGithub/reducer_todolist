import '../App.css';
import { useReducer, useRef } from 'react';
import reducer, { initState } from './reducer';
import { setTodo, addTodo, deleteTodo } from './action'

//dispatch
function App() {

    const [state, dispatch] = useReducer(reducer, initState);

    const inputRef = useRef();

    const { todo, todoList } = state;

    const handleTodo = (value) => {
        dispatch(setTodo(value));

    }

    const handleSubmit = () => {
        dispatch(addTodo(todo));
        dispatch(setTodo(''))
        inputRef.current.focus();
    }

    const handleDelete = index => {
        dispatch(deleteTodo(index));
    }

    return (
        <div className="todolist">
            <div>
                <h1>Todolist</h1>
                <input
                    ref={inputRef}
                    placeholder="Enter into here"
                    value={todo}
                    onChange={(e) => handleTodo(e.target.value)}
                ></input>
                <button onClick={() => handleSubmit()}>ADD</button>
                <ul>
                    {todoList.map((todo, index) => {
                        return (
                            <li key={index} onClick={() => handleDelete(index)}>{todo}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default App;
