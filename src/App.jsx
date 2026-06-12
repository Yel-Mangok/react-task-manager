import { Routes, Route } from "react-router-dom";

// Import the components
import Navbar from "./components/Navbar";
// Import the pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import Team from "./pages/Team";
import TasksMenu from "./pages/TasksMenu";
import CreateTask from "./pages/CreateTask";
import TaskDetails from "./pages/TaskDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Notifications from "./pages/Notifications";
import Activity from "./pages/Activity";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>

          <Route 
            path="/"
            element={<Home />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route 
            path="/tasks"
            element={<Tasks />}
          />

            <Route 
            path="/reports"
            element={<Reports />}
          />

          <Route 
            path="/profile"
            element={<Profile />}
          />

            <Route 
            path="/team"
            element={<Team />}
          />

           <Route 
            path="/activities"
            element={<Activity />}
          />

          <Route 
            path="/notifications"
            element={<Notifications />}
          />

          <Route 
            path="/settings"
            element={<Settings />}
          />

          <Route 
            path="/tasks/:id" 
            element={<TaskDetails />}
          />

            <Route 
            path="/tasksMenu/menu"
            element={<TasksMenu />}
          />

           <Route 
            path="/tasks/new" 
            element={<CreateTask />}
          />

          <Route 
            path="/about"
            element={<About />}
          />

           <Route 
            path="/help"
            element={<Help />}
          />

          <Route 
            path="*"
            element={<NotFound />}
          />

      </Routes>
    </>
  )
}