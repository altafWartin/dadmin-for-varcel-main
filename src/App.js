import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./containers/Dashboard/Dashboard.jsx";
import Workspace from "./containers/Workspace/Workspace.jsx";
import Container from "./containers/Container/Container.jsx";
import Settings from "./containers/Settings/Settings.jsx";
import Workflows from "./containers/Workflows/Workflows.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./containers/Login/Login.jsx";
import AddMember from "./containers/Settings/AddMember/AddMember.jsx";
import ChangePassword from "./containers/Settings/ChangePassword/ChangePassword.jsx";
import AddNewWorkspace from "./containers/Workspace/AddNewWorkspace.jsx";
import AddNewWorkflow from "./containers/Workflows/AddNewWorkflow.jsx";
import AddNewContainer from "./containers/Container/AddNewContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Projects from "./containers/Projects/Projects.jsx";
import EditWorkspace from "./containers/Workspace/EditWorkspace.jsx";
import EditWorkflow from "./containers/Workflows/EditWorkflows.jsx";
import EditProject from "./containers/Projects/EditProject.jsx";
import AddProject from "./containers/Projects/AddProject.jsx";
import EditContainer from "./containers/Container/EditContainer.jsx";
import AddImage from "./containers/Container/AddImage.jsx";
import EditImage from "./containers/Container/EditImage.jsx";
import EditMemberInfo from "./containers/Settings/EditMemberInfo.jsx";
import TeamMember from "./containers/Settings/TeamMember.jsx";
import Resource from "./containers/Container/Resource.jsx";

function App() {
  const [token, setToken] = useState("");
  const [currentPath, setCurrentPath] = useState(""); // State to hold current path
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Retrieve token from localStorage
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      setToken(accessToken);
    } else {
      // If token doesn't exist, navigate to login page
      navigate("/login");
    }

    // Retrieve currentPath from localStorage
    const storedPath = localStorage.getItem("currentPath");
    if (storedPath) {
      setCurrentPath(storedPath);
    } else {
      // If no stored path, set the current location pathname
      setCurrentPath(location.pathname);
    }
  }, [navigate, location.pathname]);

  // Save current path to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentPath", location.pathname);
  }, [location.pathname]);

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="App flex flex-col min-h-screen">
      {!isLoginPage && <Sidebar />}
      {!isLoginPage && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to={currentPath} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/addNewProject" element={<AddProject />} />
        <Route
          path="/projects/editProject/:projectId"
          element={<EditProject />}
        />
        <Route path="/addNewWorkspace" element={<AddNewWorkspace />} />
        <Route path="/workflow" element={<Workflows />} />
        <Route
          path="/workflow/editWorkflow/:workflowId"
          element={<EditWorkflow />}
        />
        <Route
          path="/workspace/editWorkspace/:workspaceId"
          element={<EditWorkspace />}
        />
        <Route path="/addNewWorkflow" element={<AddNewWorkflow />} />
        <Route path="/container" element={<Resource />} />
        <Route path="/addNewContainer" element={<AddNewContainer />} />
        <Route
          path="/container/editContainer/:containerId"
          element={<EditContainer />}
        />
        <Route path="/addImage" element={<AddImage />} />
        <Route path="/container/editImage/:imageId" element={<EditImage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/addMember" element={<AddMember />} />
        <Route
          path="/settings/editMemberInfo/:memberId"
          element={<EditMemberInfo />}
        />
        <Route path="/settings/teamMember/:memberId" element={<TeamMember />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
