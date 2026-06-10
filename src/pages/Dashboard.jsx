import Sidebar from "../components/Sidebar";
import UserCard from "../components/UserCard";
import DashboardStats from "../components/DashboardStats";

export default function Dashboard(){
    return(
        <div>
            <Sidebar />

            <main>
                <h1>Dashboard</h1>

                <UserCard />

                <DashboardStats />
            </main>
        </div>
    );
}