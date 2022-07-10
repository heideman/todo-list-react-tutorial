import React, {useEffect, useState} from "react";
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

const TodoItem = props => {
    const [editing, setEditing] = useState(false);

    const handleEditing = () => {
        setEditing(true);
    }

    const handleUpdateDone = (event) => {
        if (event.key === 'Enter') {
            setEditing(false);
        }
    };

    useEffect(() => {
        return () => {
            console.log("Cleaning up ...");
        }
    }, [])

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    };
    let viewMode={};
    let editMode={};
    if (editing) {
        viewMode.display="none";
    } else {
        editMode.display="none";
    }
    const { completed, id, title } = props.todo;

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input type="checkbox"
                       className={styles.checkbox}
                       checked={completed}
                       onChange={() => props.handleChangeProps(id)}/>
                <button onClick={() => props.deleteTodoProps(id)}>
                    <FaTrash style={{ color: "orangered", fontSize: "16px" }}/>
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input type={"text"} className={styles.textInput} style={editMode} value={title} onChange={ e => props.handleEditProps(id, e.target.value)} onKeyDown={handleUpdateDone}/>
        </li>
    )
}

export default TodoItem