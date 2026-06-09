import { Link } from "react-router-dom";

const tasks = [
    {
        id: 1,
        title: "Study React Router"
    },
      {
        id: 2,
        title: "Build Project"
    },
    {
        id: 3,
        title: "Practice userState"
    }
];

export default function Tasks() {
    return (
        <div>
            <h1>Tasks</h1>

            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id}>
                            <Link
                               to={`/tasks/${task.id}`}
                            >
                                {task.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}