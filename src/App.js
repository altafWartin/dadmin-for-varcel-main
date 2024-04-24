import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Dashboard from "./containers/Dashboard/Dashboard.jsx";
import Workspace from "./containers/Workspace/Workspace.jsx";
import Container from "./containers/Container/Resources.jsx";
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
import SignUp from "./containers/SignUp/SignUp.jsx";
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

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const issignUpPage = location.pathname === "/signUp";
  const isDash = location.pathname === "/";

  return (
    <>
      <div className="App">
        {!isLoginPage && !issignUpPage && <Sidebar />}
        {!isLoginPage && !issignUpPage && <Navbar />}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/editWorkspace" element={<EditWorkspace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/addNewProject" element={<AddProject />} />
          <Route path="/editProject" element={<EditProject />} />
          <Route path="/addNewWorkspace" element={<AddNewWorkspace />} />
          <Route path="/workflow" element={<Workflows />} />
          <Route path="/editWorkflow" element={<EditWorkflow />} />
          <Route path="/addNewWorkflow" element={<AddNewWorkflow />} />
          <Route path="/container" element={<Container />} />
          <Route path="/addNewContainer" element={<AddNewContainer />} />
          <Route path="/editContainer" element={<EditContainer />} />
          <Route path="/addImage" element={<AddImage />} />
          <Route path="/editImage" element={<EditImage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/addMember" element={<AddMember />} />
          <Route path="/settings/editMemberInfo" element={<EditMemberInfo />} />
          <Route path="/settings/teamMember" element={<TeamMember />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Routes>
        {!isLoginPage && !issignUpPage && <Footer />}
      </div>
    </>
  );
}

export default App;
