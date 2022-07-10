import React, {useState, useEffect} from 'react';
import './TodoContainer.css';
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList";

const TodoContainer = (props) => {
    const [todos, setTodos] = useState(getInitialTodos());

    const handleChange = (id) => {
        setTodos(prevState =>
            prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo;
            })

        );
    };

    const delTodo = id => {
        setTodos([...todos.filter(todo => {
            return todo.id !== id;
        })]);
    };

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),    title: title,    completed: false
        };
        setTodos([...todos, newTodo]);
    };

    const handleEdit = (id, newTitle) => {
        setTodos(prevState => (
            prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.title=newTitle;
                }
                return todo;
            })
        ));
    };

    function getInitialTodos() {
        // getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    // useEffect(() => {
    //     console.log("test run")
    //
    //     // getting stored items
    //     const temp = localStorage.getItem("todos")
    //     const loadedTodos = JSON.parse(temp)
    //
    //     if (loadedTodos) {
    //         setTodos(loadedTodos)
    //     }
    // }, [])

    useEffect(() => {
        // storing todo items
        const temp = JSON.stringify(todos);
        localStorage.setItem("todos", temp);
    }, [todos])


    return (
        <div className="container">
            <div className="inner">
                <Header />
                <InputTodo addTodoProps={addTodoItem} />
                <TodosList
                    todos={todos}
                    handleChangeProps={handleChange}
                    deleteTodoProps={delTodo}
                    handleEditProps={handleEdit}
                />
            </div>
        </div>
    );
}
export default TodoContainer