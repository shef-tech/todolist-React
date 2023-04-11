import React, { useState } from "react";

function ToDoItem(props) {
    const [isDone, setISDone] = useState(false);

    function handleClick() {
        setISDone((prevValue) => {
            return !prevValue;
        });
    }
    return (
        <div onClick={handleClick}>
            <li style={{ textDecoration: isDone ? "line-through" : null }}>{props.text}</li>
        </div>
    )
}

export default ToDoItem;