import {useParams} from "react-router-dom";

const tasks = [
    {
        id: 1,
        title: "Study Project",
        desc: "Learn routing basics"
    },
    {
        id: 2,
        title: "Build Project",
        desc: "Create SPA app"
    },
    {
        id: 3,
        title: "Practice useState()",
        desc: "useState() and useEffect()"
    }
];

export default function TaskDetails(){
    const {id} = useParams();

    const task = tasks.find( task => task.id === Number(id));

    if(!task) {
        return <h1>Task not Found</h1>;
    }

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.desc}</p>
        </div>
    );
}