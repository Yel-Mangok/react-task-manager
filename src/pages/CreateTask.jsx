import PageHeader from "../components/PageHeader";
import TaskForm from "../components/TaskForm";

export default function() {
    return (
        <div>
            <PageHeader title="Create Task"/>

            <TaskForm />
        </div>
    );
}