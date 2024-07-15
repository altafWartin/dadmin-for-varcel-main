import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import { useParams, useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import { Link } from "react-router-dom";
import close from "../../assets/Icon/close.png";
import logo from "../../assets/logo.svg";
import setting from "../../assets/Icon/setting.svg";
import threedots from "../../assets/Icon/threedots.svg";
import profile from "../../assets/Icon/profile-user 1.svg";
import p2 from "../../assets/Images/p2.svg";

import p3 from "../../assets/Images/p3.svg";
import p4 from "../../assets/Images/p4.svg";

import "./AddMember/AddMember.css";

import ArrowRight from "../../assets/Icon/ArrowRight.svg";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";

const users = [
  {
    index: 0,
    userName: "User 1",
    profilePicture: "../../assets/Images/p2.svg",
  },
  {
    index: 1,
    userName: "User 2",
    profilePicture: "../../assets/Images/Profile.jpeg",
  },
  {
    index: 2,
    userName: "User 2",
    profilePicture:
      "https://en.wikipedia.org/wiki/Katrina_Kaif#/media/File:Katrina_Kaif_promoting_Bharat_in_2019.jpg",
  },
  {
    index: 3,
    userName: "User 3",
    profilePicture:
      "https://unsplash.com/photos/shallow-focus-photography-of-woman-outdoor-during-day-rDEOVtE7vOs",
  },
  {
    index: 4,
    userName: "User 2",
    profilePicture: "/static/images/avatar/2.jpg",
  },
  {
    index: 5,
    userName: "User 2",
    profilePicture: "/static/images/avatar/2.jpg",
  },
  {
    index: 6,
    userName: "User 4",
    profilePicture: "/static/images/avatar/2.jpg",
  },
  {
    index: 7,
    userName: "User 2",
    profilePicture: "/static/images/avatar/2.jpg",
  },
  {
    index: 8,
    userName: "User 2",
    profilePicture: "/static/images/avatar/2.jpg",
  },
  // Add more objects as needed
];

const formatDate = (dateString) => {
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to get the correct month (0-indexed)
  const date = dateObject.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${date}`;
};

const TeamMember = () => {   const apiUrl = process.env.REACT_APP_API_URL;

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("project");
  const [isAssignPopupOpen, setAssignPopupOpen] = useState(false);
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  // const [profile, setProfile] = useState('');

  const [projects, setProjects] = useState([]);
  const [workspace, setWorkspace] = useState([]);
  const [workflow, setWorkflow] = useState([]);
  const [container, setContainer] = useState([]);

  const [assignProjects, setAssignProjects] = useState([]);
  const [assignWorkspaces, setAssignWorkspaces] = useState([]);
  const [assignWorkflows, setAssignWorkflows] = useState([]);
  const [assignContainers, setAssignContainers] = useState([]);

  const [checked, setChecked] = React.useState([]);

  const [projectChecked, setProjectChecked] = React.useState([]);
  const [workspaceChecked, setWorkspaceChecked] = React.useState([]);
  const [workflowChecked, setWorkflowChecked] = useState([]);
  const [containerChecked, setContainerChecked] = useState([]);

  const { memberId } = useParams();

  const [message, setMessage] = useState("");

  const notifyAssign = (message) => {
    toast.success(` ${message}`);
  };

  const [memberData, setMemberData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      try {
        const response = await fetch(
          `${apiUrl}/api/user/get-member/${memberId}`,
          { headers }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setName(data.data.fullName);
        setRole(data.data.role);
        // setProfile(data.data.profilePic);
        setMemberData(data.data);
      } catch (error) {
        setError(
          error.message || "An error occurred while fetching member data."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [memberId]);
 
  console.log(memberData,"Member")

  useEffect(() => {
    const fetchProjects = async (memberId) => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(
          `${apiUrl}/api/setting/get-user-projects`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ id: memberId }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        setProjects(data.data.projects); // Assuming the response has a 'projects' field
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects(memberId);
  }, [memberId]);

  useEffect(() => {
    const fetchWorkspace = async (memberId) => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(
          `${apiUrl}/api/setting/get-user-workspaces`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ id: memberId }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        setWorkspace(data.data.workspace); // Assuming the response has a 'projects' field
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchWorkspace(memberId);
  }, [memberId]);

  useEffect(() => {
    const fetchWorkflows = async (memberId) => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(
          `${apiUrl}/api/setting/get-user-workflow`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ id: memberId }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        setWorkflow(data.data.workflow); // Assuming the response has a 'projects' field
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchWorkflows(memberId);
  }, [memberId]);

  useEffect(() => {
    const fetchContainers = async (memberId) => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(
          `${apiUrl}/api/setting/get-user-containers`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ id: memberId }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        setContainer(data.data); // Assuming the response has a 'projects' field
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchContainers(memberId);
  }, [memberId]);

  const fetchAssignProjects = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${apiUrl}/api/setting/get-assign-user-projects/${memberId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setAssignProjects(data.data);

      // Assuming data.data is an array of projects with isAssign property

      // Filter projects where isProjectAssign is true and extract their IDs
      const checkedIds = data.data
        .filter((project) => project.isProjectAssign)
        .map((project) => project.id);

      setAssignProjects(data.data);
      setProjectChecked(checkedIds); // Set checked state with IDs of assigned projects
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAssignWorkspaces = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${apiUrl}/api/setting/get-assign-user-workspaces/${memberId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setAssignWorkspaces(data.data);

      // Assuming data.data is an array of projects with isAssign property

      // Filter projects where isProjectAssign is true and extract their IDs
      const checkedIds = data.data
        .filter((workspace) => workspace.isWorkspaceAssign)
        .map((workspace) => workspace.id);

      setAssignWorkspaces(data.data);
      setWorkspaceChecked(checkedIds); // Set checked state with IDs of assigned projects
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAssignWorkflows = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${apiUrl}/api/setting/get-assign-user-workflows/${memberId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setAssignWorkflows(data.data);

      // Filter workflows where isWorkflowAssign is true and extract their IDs
      const checkedIds = data.data
        .filter((workflow) => workflow.isWorkflowAssign)
        .map((workflow) => workflow.id);

      setAssignWorkflows(data.data);
      setWorkflowChecked(checkedIds); // Set checked state with IDs of assigned workflows
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAssignContainers = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${apiUrl}/api/setting/get-assign-user-containers/${memberId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setAssignContainers(data.data);

      // Filter containers where isContainerAssign is true and extract their IDs
      const checkedIds = data.data
        .filter((container) => container.isContainerAssign)
        .map((container) => container.id);

      setAssignContainers(data.data);
      setContainerChecked(checkedIds); // Set checked state with IDs of assigned containers
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAssignProjects();
    fetchAssignWorkspaces();
    fetchAssignWorkflows();
    fetchAssignContainers();
  }, [memberId]); // Fetch data when memberId changes

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const openAssignPopup = () => {
    fetchAssignProjects();
    fetchAssignWorkspaces();

    setAssignPopupOpen(true);
  };

  const closeAssignPopup = () => {
    setAssignPopupOpen(false);
    setPopupOpen(false);
  };

  const handleToggle = (id, isProjectAssign) => () => {
    const updatedProjects = assignProjects.map((project) =>
      project.id === id
        ? { ...project, isProjectAssign: !isProjectAssign }
        : project
    );
    setAssignProjects(updatedProjects);

    const isChecked = projectChecked.includes(id);
    if (isChecked) {
      const newChecked = projectChecked.filter((checkedId) => checkedId !== id);
      setProjectChecked(newChecked);
    } else {
      setProjectChecked([...projectChecked, id]);
    }
  };

  const handleAssignProjects = async () => {
    const token = localStorage.getItem("token");

    const requestBody = {
      userId: memberId,
      assignIds: projectChecked,
    };

    try {
      const response = await fetch(
        `${apiUrl}/api/setting/assign-projects-to-user`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setMessage(data.message);
      notifyAssign(data.message);
      setAssignPopupOpen(false);

      // Handle success or further actions here
    } catch (error) {
      console.error("Error assigning projects:", error);
      // Handle error cases here
    }
  };

  const handleWorkspaceToggle = (id, isWorkspaceAssign) => () => {
    const updatedWorkspaces = assignWorkspaces.map((workspace) =>
      workspace.id === id
        ? { ...workspace, isWorkspaceAssign: !isWorkspaceAssign }
        : workspace
    );
    setAssignWorkspaces(updatedWorkspaces);

    const isChecked = workspaceChecked.includes(id);
    if (isChecked) {
      const newChecked = workspaceChecked.filter(
        (checkedId) => checkedId !== id
      );
      setWorkspaceChecked(newChecked);
    } else {
      setWorkspaceChecked([...workspaceChecked, id]);
    }
  };

  const handleAssignWorkspaces = async () => {
    const token = localStorage.getItem("token");

    const requestBody = {
      userId: memberId,
      assignIds: workspaceChecked,
    };

    try {
      const response = await fetch(
        `${apiUrl}/api/setting/assign-workspaces-to-user`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setMessage(data.message);
      notifyAssign(data.message);
      setAssignPopupOpen(false);

      // Handle success or further actions here
    } catch (error) {
      console.error("Error assigning workspaces:", error);
      // Handle error cases here
    }
  };

  const handleWorkflowToggle = (id, isWorkflowAssign) => () => {
    const updatedWorkflows = assignWorkflows.map((workflow) =>
      workflow.id === id
        ? { ...workflow, isWorkflowAssign: !isWorkflowAssign }
        : workflow
    );
    setAssignWorkflows(updatedWorkflows);

    const isChecked = workflowChecked.includes(id);
    if (isChecked) {
      const newChecked = workflowChecked.filter(
        (checkedId) => checkedId !== id
      );
      setWorkflowChecked(newChecked);
    } else {
      setWorkflowChecked([...workflowChecked, id]);
    }
  };

  const handleAssignWorkflows = async () => {
    const token = localStorage.getItem("token");

    const requestBody = {
      userId: memberId,
      assignIds: workflowChecked,
    };

    try {
      const response = await fetch(
        `${apiUrl}/api/setting/assign-workflows-to-user`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setMessage(data.message);
      notifyAssign(data.message);
      setAssignPopupOpen(false);

      // Handle success or further actions here
    } catch (error) {
      console.error("Error assigning workflows:", error);
      // Handle error cases here
    }
  };

  const handleContainerToggle = (id, isContainerAssign) => () => {
    const updatedContainers = assignContainers.map((container) =>
      container.id === id
        ? { ...container, isContainerAssign: !isContainerAssign }
        : container
    );
    setAssignContainers(updatedContainers);

    const isChecked = containerChecked.includes(id);
    if (isChecked) {
      const newChecked = containerChecked.filter(
        (checkedId) => checkedId !== id
      );
      setContainerChecked(newChecked);
    } else {
      setContainerChecked([...containerChecked, id]);
    }
  };

  const handleAssignContainers = async () => {
    const token = localStorage.getItem("token");

    const requestBody = {
      userId: memberId,
      assignIds: containerChecked,
    };

    try {
      const response = await fetch(
        `${apiUrl}/api/setting/assign-containers-to-user`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setMessage(data.message);
      notifyAssign(data.message);
      setAssignPopupOpen(false);

      // Handle success or further actions here
    } catch (error) {
      console.error("Error assigning containers:", error);
      // Handle error cases here
    }
  };

  return (
    <div className="containerBody">
      {" "}
      <ToastContainer />{" "}
      {isPopupOpen && (
        <div class="fixed top-1/2 left-1/2 transform bg-blend-difference -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-[25.88rem] p-8 bg-white rounded-3xl shadow-lg backdrop-blur-[8px]">
          <button
            class="absolute top-2 right-2 bg-white"
            onClick={() => setPopupOpen(false)}
          >
            {/* Add your cut icon SVG here */}
            <img src={close} class="h-6 w-6 text-gray-500" alt="" />
          </button>
          <div class="relative h-[21.31rem] text-[0.88rem] text-dimgray font-poppins">
            <div class="w-full relative h-[21.31rem]  text-[0.88rem] text-dimgray font-poppins">
              <div class="absolute w-full top-[9.19rem] right-[0rem] left-[0rem] h-[12.13rem]">
                <button class="mb-3 w-full top-[0rem] right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200">
                  Start
                </button>
                <button class=" mb-3 w-full  right-[0rem] left-[0rem]  hover:bg-coral-100  rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200">
                  Stop
                </button>
                <button class=" w-full  right-[0rem] left-[0rem]  hover:bg-coral-100  rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200">
                  Recreate
                </button>
              </div>
              <div class="absolute top-[calc(50%_-_139.5px)] left-[calc(50%_-_89.5px)] text-[1.25rem] leading-[2.5rem] capitalize font-medium text-darkslategray-100">
                Workspace Actions
              </div>
              <img
                class="absolute top-[0rem] left-[10.19rem] w-[2.15rem] h-[1.94rem]"
                alt=""
                src={logo}
              />

              <div class="absolute top-[4.44rem] justify-center left-[2.06rem] tracking-[-0.02em] whitespace-pre-wrap text-center inline-block w-[18.31rem]">
                Improve business performance with ABCD dashboards
              </div>
            </div>
          </div>
        </div>
      )}
      <div class="user-setting-frame">
        <h2 class="settings10">Settings</h2>
        <img class="date-text-icon1" alt="" src={ArrowRight} />

      
        <div class="team-members">Team Member Information</div>
      </div>
      <div class="self-stretch mx-2 mt-2 flex flex-col items-end justify-start gap-[2.625rem_0rem] max-w-full text-[1rem] text-black mq750:gap-[2.625rem_0rem]">
        <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0rem] box-border max-w-full">
          <div class="flex-1 flex flex-row flex-wrap items-start justify-start gap-[0rem_1.938rem] max-w-full mq750:gap-[0rem_1.938rem]">
            <div class="rounded-xl bg-white flex flex-col items-center justify-start pt-[2.125rem] px-[2.063rem] pb-[2.063rem] gap-[0.563rem]">
              <img
                class="w-[4.5rem] h-[4.5rem] relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src={profile}
              />

              <div class="flex flex-col items-center justify-start py-[0rem] px-[0.25rem]">
    
                  <>
                    <div class="relative font-medium z-[1]">
                      {name}
                    </div>
                    <div class="relative text-[0.875rem] capitalize text-darkslategray-100 z-[2]">
                {role}
                    </div>
                  </>
               
              </div>
            </div>
            <div class="flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-[2.625rem] pb-[3.688rem] pr-[3.125rem] pl-[2.25rem] box-border gap-[0.75rem] min-w-[35.313rem] max-w-full text-[1.25rem] text-midnightblue mq750:min-w-full mq1050:pr-[1.563rem] mq1050:box-border">
              <div class="w-[54.375rem] h-[12.063rem] relative rounded-xl bg-white hidden max-w-full"></div>
              <h3 class="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1rem]">
                Overview
              </h3>
              <div class="self-stretch flex flex-row items-start justify-center gap-[0rem_1.25rem] mq1050:flex-wrap">
                <button
                  className={`cursor-pointer [border:none] py-[0.938rem] pr-[2.188rem] pl-[2.438rem] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap z-[2] ${
                    selectedButton === "project"
                      ? "bg-coral-100 text-white"
                      : "bg-f5f7fb text-gray-700 hover:bg-chocolate-100"
                  }`}
                  onClick={() => handleButtonClick("project")}
                >
                  <div class="relative w-[120px] text-[0.938rem] leading-[1.25rem] font-semibold font-manrope z-[1]">
                    Project
                  </div>
                </button>

                <button
                  className={`cursor-pointer [border:none] py-[0.938rem] pr-[1.188rem] pl-[1.375rem] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap z-[2] ${
                    selectedButton === "workspaces"
                      ? "bg-coral-100 text-white"
                      : "bg-f5f7fb text-gray-700 hover:bg-chocolate-100"
                  }`}
                  onClick={() => handleButtonClick("workspaces")}
                >
                  <div class="relative w-[120px] text-[0.938rem] leading-[1.25rem] font-semibold font-manrope z-[1]">
                    workspaces
                  </div>
                </button>
                <button
                  className={`cursor-pointer [border:none] py-[0.938rem] pr-[1.5rem] pl-[1.688rem] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap z-[2] ${
                    selectedButton === "workflows"
                      ? "bg-coral-100 text-white"
                      : "bg-f5f7fb text-gray-700 hover:bg-chocolate-100"
                  }`}
                  onClick={() => handleButtonClick("workflows")}
                >
                  <div class="relative w-[120px] text-[0.938rem] leading-[1.25rem] font-semibold font-manrope z-[1]">
                    Workflows
                  </div>
                </button>
                <button
                  className={`cursor-pointer [border:none] py-[0.938rem] pr-[1.438rem] pl-[1.688rem] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap z-[2] ${
                    selectedButton === "resources"
                      ? "bg-coral-100 text-white"
                      : "bg-f5f7fb text-gray-700 hover:bg-chocolate-100"
                  }`}
                  onClick={() => handleButtonClick("resources")}
                >
                  <div class="relative w-[120px] text-[0.938rem] leading-[1.25rem] font-semibold font-manrope z-[1]">
                    Resources
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mr-10 ${selectedButton === "project" ? "" : "hidden"}`}
        >
          <div>
            {isAssignPopupOpen && (
              <div class="fixed top-1/2 left-1/2 h-[28.31rem] transform bg-blend-difference -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-[25.88rem] p-8 bg-white rounded-3xl shadow-lg backdrop-blur-[8px]">
                <button
                  class="absolute top-2 right-2 bg-white"
                  onClick={() => setAssignPopupOpen(false)}
                >
                  {/* Add your cut icon SVG here */}
                  <img src={close} class="h-6 w-6 flex text-gray-500" alt="" />
                </button>
                <div class=" text-[1.25rem] leading-[2.5rem] capitalize font-medium text-darkslategray-100">
                  Assign Projects to User
                </div>
                <thead className=" flex justify-between px-3 ">
                  <p>Project ID</p>
                  <p className="">Project Name</p>
                  <p className="">select</p>
                </thead>

                <div className="h-[18rem] overflow-y-auto">
                  <List
                    dense
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      height: "10rem",
                      bgcolor: "background.paper",
                    }}
                  >
                    {assignProjects.map((project) => {
                      const { id, name, isProjectAssign } = project;
                      const labelId = `checkbox-list-secondary-label-${id}`;

                      return (
                        <ListItem
                          key={project.id}
                          secondaryAction={
                            <Checkbox
                              edge="end"
                              onChange={handleToggle(id, isProjectAssign)}
                              checked={projectChecked.includes(id)}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          }
                          disablePadding
                        >
                          <ListItemButton>
                            <p className="ml-5">{project.id}</p>
                            <p class="ml-12">{project.name}</p>
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    onClick={handleAssignProjects}
                    className="mb-2 w-full right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
                  >
                    Assign
                  </button>
                </div>
              </div>
            )}
          </div>
          <div class="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0rem] gap-[1.25rem] text-[1.5rem] text-midnightblue mq450:flex-wrap">
            <h2 class="m-0 relative text-inherit tracking-[0.02em] font-semibold font-inherit mq450:text-[1.188rem]">
              Projects
            </h2>
            <button
              onClick={openAssignPopup}
              class="cursor-pointer [border:none] py-[0.375rem] pr-[1.375rem] pl-[1.813rem] bg-coral-100 rounded-3xs flex flex-row items-center justify-end whitespace-nowrap hover:bg-chocolate-100"
            >
              <div class="h-[2rem] w-[7.625rem] relative rounded-3xs bg-coral-100 hidden"></div>
              <div class="relative text-[0.938rem] leading-[1.25rem] font-semibold font-poppins text-white text-left z-[1]">
                Assign
              </div>
            </button>
          </div>
          <div class="self-stretch flex flex-col mt-10 items-end justify-start gap-[1.44rem] max-w-full">
            <div class="w-[68.31rem] relative text-[1.13rem] pb-0 tracking-[-0.02em] capitalize font-medium font-poppins text-black whitespace-pre-wrap text-left inline-block max-w-full">
              <thead className=" flex justify-between pr-4 ">
                <p>Project ID</p>
                <p className="pl-2">Name</p>
                <p className="pl-4">Created</p>
                <p>Status</p>
                <p className="">IsActive</p>
                <p className="pl-5">edit</p>
                <p className="pr-10">action</p>
              </thead>
            </div>

            <tbody className="w-full space-y-3 overflow-y-auto scrollbar-thumb-dark-700 h-[450px]">
              {projects.map((project) => (
                <div
                  key={project.id}
                  class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap"
                >
                  <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                  <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                    <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                      {project.id}
                    </div>
                  </div>
                  <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                    <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                      <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                        <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                          {project.name}
                        </div>
                      </div>
                      <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                        <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                          {formatDate(project.created_at)}
                        </div>
                      </div>
                      <div class="w-[7.38rem] flex flex-col items-start justify-start">
                        <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                          <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                          <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                            {project.status}
                          </div>
                        </button>
                      </div>

                      <div className="pr-4">
                        <Form className="content-center">
                          <Form.Check
                            type="switch"
                            id={`custom-switch-${project.id}`}
                            className="custom-switch content-center"
                            label={project.isActive ? "Active" : "Inactive"}
                            checked={project.isActive}
                            // onChange={handleSwitchChange}
                          />
                        </Form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hover-div"
                    // onMouseEnter={() => handleMouseEnter(project.index)}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <img
                      className="self-stretch h-[1.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={p3}
                    />
                    <img
                      className="self-stretch ml-[-10px] h-[1.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={p2}
                    />
                    <img
                      className="self-stretch ml-[-10px] h-[1.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={p4}
                    />

                    {hoveredProjectIndex === project.index && (
                      <div className="user-list absolute h-[12rem] overflow-y-auto bg-gray-100 bg-opacity-70 z-10">
                        <List>
                          {users.map((user) => (
                            <ListItem
                              // onClick={handleListItemClick}
                              key={user.index}
                              disablePadding
                            >
                              <ListItemButton>
                                <ListItemAvatar>
                                  <img src={user.profilePicture} alt="" />
                                  <img
                                    className="self-stretch ml-[-10px] h-[3.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src={p4}
                                  />
                                </ListItemAvatar>
                                <div className="">
                                  <ListItemText primary={user.userName} />
                                  <p className="text-sm"> Software Developer</p>
                                </div>
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </div>
                    )}
                  </div>
                  <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                    <div class="flex flex-row items-center justify-start gap-[1rem]">
                      <button
                        // onClick={() => handleEditProject(project.id)}
                        className="no-underline  bg-white"
                      >
                        <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                          <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                          <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                            
                          </div>
                        </div>
                      </button>
                    </div>

                    {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                    <button
                      className="bg-white"
                      onClick={() => openPopup(project.id)}
                    >
                      <img
                        class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                        alt=""
                        src={threedots}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </tbody>
          </div>
        </div>
        <div
          className={`mr-10 ${selectedButton === "workspaces" ? "" : "hidden"}`}
        >
          {" "}
          <div>
            {isAssignPopupOpen && (
              <div class="fixed top-1/2 left-1/2 h-[28.31rem] transform bg-blend-difference -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-[25.88rem] p-8 bg-white rounded-3xl shadow-lg backdrop-blur-[8px]">
                <button
                  class="absolute top-2 right-2 bg-white"
                  onClick={() => setAssignPopupOpen(false)}
                >
                  {/* Add your cut icon SVG here */}
                  <img src={close} class="h-6 w-6 flex text-gray-500" alt="" />
                </button>
                <div class=" text-[1.25rem] leading-[2.5rem] capitalize font-medium text-darkslategray-100">
                  Assign Workspace to User
                </div>
                <thead className=" flex justify-between px-3 ">
                  <p>Workspace ID</p>
                  <p className="">Workspace Name</p>
                  <p className="">select</p>
                </thead>

                <div className="h-[18rem] overflow-y-auto">
                  <List
                    dense
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      height: "10rem",
                      bgcolor: "background.paper",
                    }}
                  >
                    {assignWorkspaces.map((workspace) => {
                      const { id, name, isWorkspaceAssign } = workspace;
                      const labelId = `checkbox-list-secondary-label-${id}`;

                      return (
                        <ListItem
                          key={workspace.id}
                          secondaryAction={
                            <Checkbox
                              edge="end"
                              onChange={handleWorkspaceToggle(
                                id,
                                isWorkspaceAssign
                              )}
                              checked={workspaceChecked.includes(id)}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          }
                          disablePadding
                        >
                          <ListItemButton>
                            <p className="ml-5">{workspace.id}</p>
                            <p class="ml-12">{workspace.name}</p>
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    onClick={handleAssignWorkspaces}
                    className="mb-2 w-full right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
                  >
                    Assign
                  </button>
                </div>
              </div>
            )}
          </div>
          <div class="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0rem] gap-[1.25rem] text-[1.5rem] text-midnightblue mq450:flex-wrap">
            <h2 class="m-0 relative text-inherit tracking-[0.02em] font-semibold font-inherit mq450:text-[1.188rem]">
              Workspace
            </h2>
            <button
              onClick={openAssignPopup}
              class="cursor-pointer [border:none] py-[0.375rem] pr-[1.375rem] pl-[1.813rem] bg-coral-100 rounded-3xs flex flex-row items-center justify-end whitespace-nowrap hover:bg-chocolate-100"
            >
              <div class="h-[2rem] w-[7.625rem] relative rounded-3xs bg-coral-100 hidden"></div>
              <div class="relative text-[0.938rem] leading-[1.25rem] font-semibold font-poppins text-white text-left z-[1]">
                Assign
              </div>
            </button>
          </div>
          <div class="self-stretch flex flex-col mt-10 items-end justify-start gap-[1.44rem] max-w-full">
            <div class="w-[68.31rem] relative text-[1.13rem] pb-0 tracking-[-0.02em] capitalize font-medium font-poppins text-black whitespace-pre-wrap text-left inline-block max-w-full">
              <thead className=" flex justify-between pr-4 ">
                <p>Workspace ID</p>
                <p className="pl-2">Name</p>
                <p className="pl-4">Created</p>
                <p>Status</p>
                <p className="">IsActive</p>
                <p className="pl-5">edit</p>
                <p className="pr-10">action</p>
              </thead>
            </div>

            <tbody className="w-full space-y-3 overflow-y-auto scrollbar-thumb-dark-700 h-[450px]">
              {workspace.map((workspace) => (
                <div
                  key={workspace.index}
                  class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap"
                >
                  <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                  <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                    <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                      {workspace.id}
                    </div>
                  </div>
                  <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                    <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                      <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                        <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                          {workspace.name}
                        </div>
                      </div>
                      <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                        <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                          {formatDate(workspace.created_at)}
                        </div>
                      </div>
                      <div class="w-[7.38rem] flex flex-col items-start justify-start">
                        <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                          <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                          <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                            {workspace.status}
                          </div>
                        </button>
                      </div>

                      <div className="pr-4">
                        <Form className="content-center">
                          <Form.Check
                            type="switch"
                            id={`custom-switch-${workspace.id}`}
                            className="custom-switch content-center"
                            label={workspace.isActive ? "Active" : "Inactive"}
                            checked={workspace.isActive}
                            // onChange={handleSwitchChange}
                          />
                        </Form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hover-div"
                    // onMouseEnter={() => handleMouseEnter(workspace.index)}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <img
                      className="self-stretch h-[1.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={p3}
                    />
                    <img
                      className="self-stretch ml-[-10px] h-[1.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={p2}
                    />
                    <img
                      className="self-stretch ml-[-10px] h-[1.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={p4}
                    />

                    {hoveredProjectIndex === workspace.index && (
                      <div className="user-list absolute h-[12rem] overflow-y-auto bg-gray-100 bg-opacity-70 z-10">
                        <List>
                          {users.map((user) => (
                            <ListItem
                              // onClick={handleListItemClick}
                              // key={user.index}
                              disablePadding
                            >
                              <ListItemButton>
                                <ListItemAvatar>
                                  {/* <Avatar
                                    src={user.profilePicture}
                                    alt={user.userName}
                                  />
                                  <img src={user.profilePicture} alt="" /> */}
                                  <img
                                    className="self-stretch ml-[-10px] h-[3.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src={p4}
                                  />
                                </ListItemAvatar>
                                <div className="">
                                  <ListItemText primary={user.userName} />
                                  <p className="text-sm"> Software Developer</p>
                                </div>
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </div>
                    )}
                  </div>
                  <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                    <div class="flex flex-row items-center justify-start gap-[1rem]">
                      <button
                        // onClick={() => handleEditWorkspace(workspace.id)}
                        className="no-underline  bg-white"
                      >
                        <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                          <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                          <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                            
                          </div>
                        </div>
                      </button>
                    </div>

                    {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                    <button
                      className="bg-white"
                      onClick={() => openPopup(workspace.id)}
                    >
                      <img
                        class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                        alt=""
                        src={threedots}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </tbody>
          </div>
        </div>
        <div
          className={`mr-10 ${selectedButton === "workflows" ? "" : "hidden"}`}
        >
          {" "}
          <div>
            {isAssignPopupOpen && (
              <div class="fixed top-1/2 left-1/2 h-[28.31rem] transform bg-blend-difference -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-[25.88rem] p-8 bg-white rounded-3xl shadow-lg backdrop-blur-[8px]">
                <button
                  class="absolute top-2 right-2 bg-white"
                  onClick={() => setAssignPopupOpen(false)}
                >
                  {/* Add your cut icon SVG here */}
                  <img src={close} class="h-6 w-6 flex text-gray-500" alt="" />
                </button>
                <div class=" text-[1.25rem] leading-[2.5rem] capitalize font-medium text-darkslategray-100">
                  Assign Workflows to User
                </div>
                <thead className=" flex justify-between px-3 ">
                  <p>Workflows ID</p>
                  <p className="">Workflows Name</p>
                  <p className="">select</p>
                </thead>

                <div className="h-[18rem] overflow-y-auto">
                  <List
                    dense
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      height: "10rem",
                      bgcolor: "background.paper",
                    }}
                  >
                    {assignWorkflows.map((workflow) => {
                      const { id, name, isWorkflowAssign } = workflow;
                      const labelId = `checkbox-list-secondary-label-${id}`;

                      return (
                        <ListItem
                          key={workflow.id}
                          secondaryAction={
                            <Checkbox
                              edge="end"
                              onChange={handleWorkflowToggle(
                                id,
                                isWorkflowAssign
                              )}
                              checked={workflowChecked.includes(id)}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          }
                          disablePadding
                        >
                          <ListItemButton>
                            <p className="ml-5">{workflow.id}</p>
                            <p className="ml-12">{workflow.name}</p>
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    onClick={handleAssignWorkflows}
                    className="mb-2 w-full right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
                  >
                    Assign
                  </button>
                </div>
              </div>
            )}
          </div>
          <div class="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0rem] gap-[1.25rem] text-[1.5rem] text-midnightblue mq450:flex-wrap">
            <h2 class="m-0 relative text-inherit tracking-[0.02em] font-semibold font-inherit mq450:text-[1.188rem]">
              Workflows
            </h2>
            <button
              onClick={openAssignPopup}
              class="cursor-pointer [border:none] py-[0.375rem] pr-[1.375rem] pl-[1.813rem] bg-coral-100 rounded-3xs flex flex-row items-center justify-end whitespace-nowrap hover:bg-chocolate-100"
            >
              <div class="h-[2rem] w-[7.625rem] relative rounded-3xs bg-coral-100 hidden"></div>
              <div class="relative text-[0.938rem] leading-[1.25rem] font-semibold font-poppins text-white text-left z-[1]">
                Assign
              </div>
            </button>
          </div>
          <div class="self-stretch flex flex-col mt-10 items-end justify-start gap-[1.44rem] max-w-full">
            <div class="w-[68.31rem] relative text-[1.13rem] pb-0 tracking-[-0.02em] capitalize font-medium font-poppins text-black whitespace-pre-wrap text-left inline-block max-w-full">
              <thead className=" flex justify-between pr-4 ">
                <p>Workflow ID</p>
                <p className="pl-2">Name</p>
                <p className="pl-4">Created</p>
                <p>Status</p>
                <p className="">IsActive</p>
                <p className="pl-5">edit</p>
                <p className="pr-10">action</p>
              </thead>
            </div>

            <tbody className="w-full space-y-3 overflow-y-auto scrollbar-thumb-dark-700 h-[450px]">
              {workflow.map((workflow) => (
                <div
                  key={workflow.index}
                  class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap"
                >
                  <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                  <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                    <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                      {workflow.id}
                    </div>
                  </div>
                  <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                    <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                      <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                        <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                          {workflow.name}
                        </div>
                      </div>
                      <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                        <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                          {formatDate(workflow.created_at)}
                        </div>
                      </div>
                      <div class="w-[7.38rem] flex flex-col items-start justify-start">
                        <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                          <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                          <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                            {workflow.status}
                          </div>
                        </button>
                      </div>

                      <div className="pr-4">
                        <Form className="content-center">
                          <Form.Check
                            type="switch"
                            id={`custom-switch-${workflow.id}`}
                            className="custom-switch content-center"
                            label={workflow.isActive ? "Active" : "Inactive"}
                            checked={workflow.isActive}
                            // onChange={handleSwitchChange}
                          />
                        </Form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hover-div"
                    // onMouseEnter={() => handleMouseEnter(workspace.index)}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <img
                      className="self-stretch h-[1.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={p3}
                    />
                    <img
                      className="self-stretch ml-[-10px] h-[1.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={p2}
                    />
                    <img
                      className="self-stretch ml-[-10px] h-[1.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={p4}
                    />

                    {hoveredProjectIndex === workflow.index && (
                      <div className="user-list absolute h-[12rem] overflow-y-auto bg-gray-100 bg-opacity-70 z-10">
                        <List>
                          {users.map((user) => (
                            <ListItem
                              // onClick={handleListItemClick}
                              // key={user.index}
                              disablePadding
                            >
                              <ListItemButton>
                                <ListItemAvatar>
                                  {/* <Avatar
                                    src={user.profilePicture}
                                    alt={user.userName}
                                  />
                                  <img src={user.profilePicture} alt="" /> */}
                                  <img
                                    className="self-stretch ml-[-10px] h-[3.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src={p4}
                                  />
                                </ListItemAvatar>
                                <div className="">
                                  <ListItemText primary={user.userName} />
                                  <p className="text-sm"> Software Developer</p>
                                </div>
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </div>
                    )}
                  </div>
                  <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                    <div class="flex flex-row items-center justify-start gap-[1rem]">
                      <button
                        // onClick={() => handleEditWorkspace(workspace.id)}
                        className="no-underline  bg-white"
                      >
                        <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                          <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                          <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                            
                          </div>
                        </div>
                      </button>
                    </div>

                    {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                    <button
                      className="bg-white"
                      onClick={() => openPopup(workflow.id)}
                    >
                      <img
                        class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                        alt=""
                        src={threedots}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </tbody>
          </div>
        </div>
        <div
          className={`mr-10 ${selectedButton === "resources" ? "" : "hidden"}`}
        >
          <div>
            {isAssignPopupOpen && (
              <div class="fixed top-1/2 left-1/2 h-[28.31rem] transform bg-blend-difference -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-[25.88rem] p-8 bg-white rounded-3xl shadow-lg backdrop-blur-[8px]">
                <button
                  class="absolute top-2 right-2 bg-white"
                  onClick={() => setAssignPopupOpen(false)}
                >
                  {/* Add your cut icon SVG here */}
                  <img src={close} class="h-6 w-6 flex text-gray-500" alt="" />
                </button>
                <div class=" text-[1.25rem] leading-[2.5rem] capitalize font-medium text-darkslategray-100">
                  Assign Container to User
                </div>
                <thead className=" flex justify-between px-3 ">
                  <p>Container ID</p>
                  <p className="">Container Name</p>
                  <p className="">select</p>
                </thead>

                <div className="h-[18rem] overflow-y-auto">
                  <List
                    dense
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      height: "10rem",
                      bgcolor: "background.paper",
                    }}
                  >
                    {assignContainers.map((container) => {
                      const { id, name, isContainerAssign } = container;
                      const labelId = `checkbox-list-secondary-label-${id}`;

                      return (
                        <ListItem
                          key={id}
                          secondaryAction={
                            <Checkbox
                              edge="end"
                              onChange={handleContainerToggle(
                                id,
                                isContainerAssign
                              )}
                              checked={containerChecked.includes(id)}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          }
                          disablePadding
                        >
                          <ListItemButton>
                            <p className="ml-5">{id}</p>
                            <p className="ml-12">{name}</p>
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    onClick={handleAssignContainers}
                    className="mb-2 w-full right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
                  >
                    Assign
                  </button>
                </div>
              </div>
            )}
          </div>
          <div class="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0rem] gap-[1.25rem] text-[1.5rem] text-midnightblue mq450:flex-wrap">
            <h2 class="m-0 relative text-inherit tracking-[0.02em] font-semibold font-inherit mq450:text-[1.188rem]">
              Resources
            </h2>
            <button
              onClick={openAssignPopup}
              class="cursor-pointer [border:none] py-[0.375rem] pr-[1.375rem] pl-[1.813rem] bg-coral-100 rounded-3xs flex flex-row items-center justify-end whitespace-nowrap hover:bg-chocolate-100"
            >
              <div class="h-[2rem] w-[7.625rem] relative rounded-3xs bg-coral-100 hidden"></div>
              <div class="relative text-[0.938rem] leading-[1.25rem] font-semibold font-poppins text-white text-left z-[1]">
                Assign
              </div>
            </button>
          </div>
          <div class="self-stretch flex flex-col mt-10 items-end justify-start gap-[1.44rem] max-w-full">
            <div class="w-[68.31rem] relative text-[1.13rem] pb-0 tracking-[-0.02em] capitalize font-medium font-poppins text-black whitespace-pre-wrap text-left inline-block max-w-full">
              <thead className=" flex justify-between pr-4 ">
                <p>Resources ID</p>
                <p className="pl-2">Name</p>
                <p className="pl-4">Created</p>
                <p>Status</p>
                <p className="">IsActive</p>
                <p className="pl-5">edit</p>
                <p className="pr-10">action</p>
              </thead>
            </div>
            <tbody className="w-full space-y-3 overflow-y-auto scrollbar-thumb-dark-700 h-[450px]">
              {container.map((container) => (
                <div
                  key={container.index}
                  class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap"
                >
                  <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                  <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                    <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                      {container.id}
                    </div>
                  </div>
                  <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                    <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                      <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                        <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                          {container.name}
                        </div>
                      </div>
                      <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                        <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
           
                          {formatDate(workspace.created_at)}

                        </div>
                      </div>
                      <div class="w-[7.38rem] flex flex-col items-start justify-start">
                        <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                          <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                          <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                            {container.status}
                          </div>
                        </button>
                      </div>

                      <div className="pr-4">
                        <Form className="content-center">
                          <Form.Check
                            type="switch"
                            id={`custom-switch-${container.id}`}
                            className="custom-switch content-center"
                            label={container.isActive ? "Active" : "Inactive"}
                            checked={container.isActive}
                            // onChange={handleSwitchChange}
                          />
                        </Form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hover-div"
                    // onMouseEnter={() => handleMouseEnter(workspace.index)}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <img
                      className="self-stretch h-[1.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={p3}
                    />
                    <img
                      className="self-stretch ml-[-10px] h-[1.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={p2}
                    />
                    <img
                      className="self-stretch ml-[-10px] h-[1.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={p4}
                    />

                    {hoveredProjectIndex === container.index && (
                      <div className="user-list absolute h-[12rem] overflow-y-auto bg-gray-100 bg-opacity-70 z-10">
                        <List>
                          {users.map((user) => (
                            <ListItem
                              // onClick={handleListItemClick}
                              // key={user.index}
                              disablePadding
                            >
                              <ListItemButton>
                                <ListItemAvatar>
                                  {/* <Avatar
                                    src={user.profilePicture}
                                    alt={user.userName}
                                  />
                                  <img src={user.profilePicture} alt="" /> */}
                                  <img
                                    className="self-stretch ml-[-10px] h-[3.5rem] absolute relative max-w-full overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src={p4}
                                  />
                                </ListItemAvatar>
                                <div className="">
                                  <ListItemText primary={user.userName} />
                                  <p className="text-sm"> Software Developer</p>
                                </div>
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </div>
                    )}
                  </div>
                  <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                    <div class="flex flex-row items-center justify-start gap-[1rem]">
                      <button
                        // onClick={() => handleEditWorkspace(workspace.id)}
                        className="no-underline  bg-white"
                      >
                        <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                          <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                          <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                            
                          </div>
                        </div>
                      </button>
                    </div>

                    {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                    <button
                      className="bg-white"
                      onClick={() => openPopup(container.id)}
                    >
                      <img
                        class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                        alt=""
                        src={threedots}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
