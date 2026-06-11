import { useState } from "react";

export default function taskForm(){
    const [title, setTitle] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={title}
                placeholder="Task title"
                onChange={
                    event => setTitle(event.target.value)
                }
            />

            <button type="submit">
                Create Task
            </button>
        </form>
    );
}