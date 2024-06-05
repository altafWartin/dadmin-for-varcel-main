import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import search from "../../assets/Icon/search.svg";
import Form from "react-bootstrap/Form";
import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";
import close from "../../assets/Icon/close.png";
import logo from "../../assets/logo.svg";
import threedots from "../../assets/Icon/threedots.svg";
import p2 from "../../assets/Images/p2.svg";
import p3 from "../../assets/Images/p3.svg";
import p4 from "../../assets/Images/p4.svg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DateRangePicker from "rsuite/DateRangePicker";
import format from "date-fns/format";
import "rsuite/DateRangePicker/styles/index.css";

const formatDate = (dateString) => {
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to get the correct month (0-indexed)
  const date = dateObject.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${date}`;
};

const Workflow = () => {
  const [containers, setContainers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [shouldFetchData, setShouldFetchData] = useState(true);
  const [workspaces, setWorkspaces] = useState();

  const [isAssignPopupOpen, setAssignPopupOpen] = useState(false);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [userChecked, setUserChecked] = useState([]);

  const user = JSON.parse(localStorage.getItem("user")); // Retrieve user from localStorage

  const [message, setMessage] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateRangeChange = (value) => {
    console.log("Date range changed:", value);
    if (Array.isArray(value) && value.length === 2) {
      const startDate = new Date(value[0]).toISOString().split("T")[0];
      const endDate = new Date(value[1]).toISOString().split("T")[0];

      setStartDate(startDate);
      setEndDate(endDate);
      console.log("Start Date:", startDate);
      console.log("End Date:", endDate);
      setShouldFetchData(true); // Set shouldFetchData to true after successful deletion
    } else {
      setStartDate("2023-04-01");
      const today = new Date().toISOString().split("T")[0];
      setEndDate(today);
      // Handle the case when value is not in the expected format
      console.log("Invalid date range:", value);
      setShouldFetchData(true); // Set shouldFetchData to true after successful deletion
    }
  };

  const apiUrl = "https://d-admin-backend.onrender.com";

  const notifyAssign = (message) => {
    toast.success(` ${message}`);
  };

  const notifyDelete = () => toast.success("Workflow deleted successfully");
  const notifyStatus = () =>
    toast.success("Container status updated successfully");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const [users, setUsers] = useState([]);

  console.log("users", users);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const getAssignUsers = async (projectId) => {
    console.log("this data is from selected projectid ", projectId);
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${apiUrl}/api/workflow/get-assign-workflow/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      const userData = data.data;
      console.log("API Response user Data :", data.data); // Log the response
      setUsers(userData); // Assuming setUsers is a state update function
      // Filter userData to get users with isWorkflowAssign true and extract their IDs
      const userIDsContainerAssignTrue = userData
        .filter((user) => user.isWorkflowAssign)
        .map((user) => user.id);

      console.log(
        "User IDs with isWorkflowAssign true:",
        userIDsContainerAssignTrue
      );
      setUserChecked(userIDsContainerAssignTrue);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetchData) {
        const token = localStorage.getItem("token");
        // Initialize the base URL
        let url = `${apiUrl}/api/workspace/all-workspaces`;

        // Check if startDate and endDate are defined and not empty or null
        if (startDate && endDate) {
          url += `?startDate=${startDate}&endDate=${endDate}`;
        }

        try {
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          console.log("API Responseeeeeeee:", data); // Log the response
          if (data.success) {
            const sortedWorkspaces = data.data.rows.sort((a, b) => a.id - b.id);
            setWorkspaces(sortedWorkspaces);
            // setContainers(sortedWorkspaces);
            setProjects(sortedWorkspaces);
            setShouldFetchData(false); // Set shouldFetchData to true after successful deletion
          } else {
            console.error("Failed to fetch projects:", data.message);
          }
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      }
    };

    fetchData();
  }, [shouldFetchData, startDate, endDate]); // Ensure useEffect runs when startDate or endDate change

  console.log(projects.length);

  useEffect(() => {
    if (searchTerm) {
      const results = projects.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProjects(results);
    } else {
      setFilteredProjects(projects); // Reset to all projects when search term is cleared
    }
  }, [searchTerm, projects]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (!event.target.value) {
      setShouldFetchData(true); // Refetch all projects if search is cleared
    }
  };
  console.log(filteredProjects.length);

  const handleEditProject = async (workflowId) => {
    navigate(`/workflow/editWorkflow/${workflowId}`);
  };

  const openPopup = (projectId) => {
    setPopupOpen(true);
    getAssignUsers(projectId);
    console.log("openPopup", projectId);
    setSelectedProjectId(projectId); // Assuming you have a state to store the selected project ID
    console.log("popupOpen", selectedProjectId);
  };

  const handleDeleteProject = async (selectedProjectId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://d-admin-backend.onrender.com/api/workflow/delete-workflow/${selectedProjectId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            // Add any other headers if required, such as authorization headers
          },
          // Add body data if your API requires it for deletion
          // body: JSON.stringify({}),
        }
      );

      if (response.ok) {
        // Handle successful deletion, e.g., update UI or show a success message
        console.log("Project deleted successfully");
        setShouldFetchData(true); // Set shouldFetchData to true after successful deletion
        notifyDelete();
        closePopup();
      } else {
        // Handle unsuccessful deletion, e.g., show an error message
        console.error("Failed to delete project");
      }
    } catch (error) {
      // Handle any network errors or exceptions
      console.error("An error occurred:", error);
    }
  };

  const closePopup = () => {
    getAssignUsers(selectedProjectId);
    setPopupOpen(false);
  };

  const openAssignPopup = (selectedProjectId) => {
    console.log("open assign popup");
    getAssignUsers(selectedProjectId);

    // console.log("openPopup", projectId);
    console.log("popupOpen", selectedProjectId);
    setAssignPopupOpen(true);
    getAssignUsers(selectedProjectId);
  };

  const closeAssignPopup = () => {
    setAssignPopupOpen(false);
    setPopupOpen(false);
  };

  // Inside your component
  const navigate = useNavigate();

  console.log("userChecked", userChecked);

  const handleToggle = (id, isWorkflowAssign) => () => {
    console.log("Toggling user with ID:", id);
    console.log("Current isWorkflowAssign value:", isWorkflowAssign);

    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isWorkflowAssign: !isWorkflowAssign } : user
    );

    console.log("Updated users:", updatedUsers);

    // Filter users with isWorkflowAssign equal to true and save their IDs in an array
    const userIDsContainerAssignTrue = updatedUsers
      .filter((user) => user.isWorkflowAssign)
      .map((user) => user.id);

    console.log(
      "User IDs with isWorkflowAssign true:",
      userIDsContainerAssignTrue
    );

    // Now you can do something with the user IDs that have isWorkflowAssign true

    // const updatedUsers = users.map((user) =>
    //   user.id === id ? { ...user, isWorkflowAssign: !isWorkflowAssign } : user
    // );

    console.log("Updated usersssssssssss:", updatedUsers);

    setUsers(updatedUsers);

    const isChecked = userChecked.includes(id);
    if (isChecked) {
      const newChecked = userChecked.filter((checkedId) => checkedId !== id);
      setUserChecked(newChecked);
    } else {
      setUserChecked([...userChecked, id]);
    }
  };
  console.log(userChecked);

  const handleAssignProjects = async () => {
    const token = localStorage.getItem("token");

    const requestBody = {
      assignUsers: userChecked,
      workflowId: selectedProjectId,
    };
    console.log("requestBody", requestBody);

    try {
      const response = await fetch(
        "https://d-admin-backend.onrender.com/api/workflow/assign-workflow",
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
      console.log("API Responseeeeeeee:", data); // Log the response

      setMessage(data.message);
      notifyAssign(data.message);
      getAssignUsers(selectedProjectId);
      setShouldFetchData(true); // Set shouldFetchData to true after successful deletion
      setUserChecked([]);

      setAssignPopupOpen(false);
      closePopup();

      // Handle success or further actions here
    } catch (error) {
      console.error("Error assigning projects:", error);
      // Handle error cases here
    }
  };

  const handleSwitchChange = (containerId, currentIsActive) => {
    // Do something with projectId and currentIsActive
    console.log(
      `Project ID: ${containerId}, Current IsActive: ${currentIsActive}`
    );

    const token = localStorage.getItem("token");
    const newIsActive = !currentIsActive; // Flip the currentIsActive value

    const requestBody = JSON.stringify({
      id: containerId,
      isActive: newIsActive,
    });
    console.log("requestBody", requestBody);

    fetch(`${apiUrl}/api/workflow/change-active-inactive`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: requestBody,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from API:", data);
        setShouldFetchData(true); // Set shouldFetchData to true after successful deletion

        // Handle response or update local state as needed
      })
      .catch((error) => {
        console.error("Error updating project:", error);
        // Handle error if needed
      });
  };

  const [showUserList, setShowUserList] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event, projectId) => {
    console.log("handleClickListItem", projectId);
    setSelectedProjectId(projectId);
    getAssignUsers(projectId);
    setAnchorEl(event.currentTarget);
  };

  console.log("handleClickListItem", selectedProjectId);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // update status

  console.log(apiUrl, "apiUrl=");

  const updateContainerStatus = async (projectId, status) => {
    const token = localStorage.getItem("token");

    try {
      const requestBody = {
        id: projectId,
        status: status,
      };

      const response = await fetch(`${apiUrl}/api/workflow/update-status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to update container status");
      }

      setShouldFetchData(true); // Set shouldFetchData to true after successful deletion
      notifyStatus();

      setPopupOpen(false);
      const data = await response.json();
      console.log("Container status updated:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {" "}
      <ToastContainer />
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
              Assign Workflow to Users
            </div>
            <thead className=" flex justify-between px-3 ">
              <p>User ID</p>
              <p className="">User Profile</p>
              <p className="">User Name</p>
              <p className="">Assign</p>
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
                {users &&
                  users.map((user) => {
                    const { id, name, isWorkflowAssign, profilePic } = user;
                    const labelId = `checkbox-list-secondary-label-${id}`;

                    return (
                      <ListItem
                        key={id}
                        secondaryAction={
                          <Checkbox
                            edge="end"
                            onChange={handleToggle(id, isWorkflowAssign)}
                            checked={userChecked.includes(id)}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        }
                        disablePadding
                      >
                        <ListItemButton>
                          <p className="mx-3">{id}</p>
                          <ListItemAvatar>
                            <Avatar
                              src={require("../../assets/Images/Profile.jpeg")}
                              // src={profilePicture}
                              alt={name}
                              className="ml-11"
                            />
                          </ListItemAvatar>
                          <p className="ml-12">{name}</p>
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
      {isPopupOpen && (
        <div class="fixed top-1/2 left-1/2 transform bg-blend-difference -translate-x-1/2 -translate-y-1/2 z-[9998] w-full max-w-[25.88rem] p-8 bg-white rounded-3xl shadow-lg backdrop-blur-[8px]">
          <button
            class="absolute top-2 right-2 bg-white"
            onClick={() => setPopupOpen(false)}
          >
            {/* Add your cut icon SVG here */}
            <img src={close} class="h-6 w-6 text-gray-500" alt="" />
          </button>
          <div class="relative h-[28.31rem] text-[0.88rem] text-dimgray font-poppins">
            <div class="w-full relative h-[24.31rem]  text-[0.88rem] text-dimgray font-poppins">
              <div class="absolute w-full top-[9.19rem] right-[0rem] left-[0rem] h-[12.13rem]">
                <button
                  onClick={() =>
                    updateContainerStatus(selectedProjectId, "Start")
                  }
                  class="mb-3 w-full top-[0rem] right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
                >
                  Start
                </button>
                <button
                  onClick={() =>
                    updateContainerStatus(selectedProjectId, "Stop")
                  }
                  class="mb-3 w-full right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
                >
                  Stop
                </button>
                <button
                  onClick={() =>
                    updateContainerStatus(selectedProjectId, "Recreate")
                  }
                  class="mb-3 w-full right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
                >
                  Recreate
                </button>{" "}
                <button
                  onClick={() => handleDeleteProject(selectedProjectId)}
                  class=" mb-3 w-full  right-[0rem] left-[0rem]  hover:bg-coral-100  rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
                >
                  Delete
                </button>
                <button
                  onClick={() => openAssignPopup(selectedProjectId)}
                  class=" mb-2 w-full  right-[0rem] left-[0rem]  hover:bg-coral-100  rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
                >
                  Assign
                </button>
              </div>

              <img
                class=" top-[0rem] left-[10.19rem] w-[2.15rem] h-[1.94rem]"
                alt=""
                src={logo}
              />
              <div class=" text-[1.25rem] leading-[2.5rem] capitalize font-medium text-darkslategray-100">
                Workflow Actions
              </div>

              <div class="absolute top-[4.44rem] justify-center left-[2.06rem] tracking-[-0.02em] whitespace-pre-wrap text-center inline-block w-[18.31rem]">
                Improve business performance with ABCD dashboards
              </div>
            </div>
          </div>
        </div>
      )}
      <div className=" bg-slate-100 pt-10 pl-[260px] h-[112vh]  z-[20]">
        <section class=" w-[71.25rem] px-[var(--padding-xl)] box-border text-left text-5xl text-bodytext-100 font-poppins flex justify-start flex flex-col items-start max-w-full">
          <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full text-[1.5rem] text-bodytext-100 mq750:flex-wrap">
            <div className=" w-1/2 flex justify-between">
              <h2 class="m-0 h-[2.25rem] relative text-inherit tracking-[0.02em] font-semibold font-inherit flex items-center mq450:text-[1.19rem]">
                Workflow
              </h2>{" "}
              <div class="h-[2.5rem] w-[18.56rem] rounded-xl bg-white box-border flex flex-row items-start justify-start py-[0.69rem] px-[0.75rem] relative gap-[1.31rem] border-[1px] border-solid border-stroke">
                <input
                  class="w-[7.5rem] [border:none] [outline:none] font-poppins text-[0.75rem] bg-[transparent] h-[1.13rem] absolute my-0 mx-[!important] top-[0.69rem] left-[3.19rem] text-bodytext-50 text-left flex items-center z-[1]"
                  placeholder="Search "
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />

                <img
                  class="h-[45%] w-[6.06%] absolute my-0 mx-[!important] top-[27.5%] right-[89.87%] bottom-[27.5%] left-[4.07%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src={search}
                />
              </div>
            </div>
            <div class="flex flex-row items-start justify-start gap-[1.38rem] max-w-full text-right text-[0.75rem] mq450:flex-wrap">
              {!user ||
                (user.role !== "Project Manager" && (
                  <>
                    {" "}
                    <Link
                      to="/addNewWorkflow"
                      class="cursor-pointer h-[2.5rem] no-underline [border:none] py-[0.38rem] pr-[1.38rem] pl-[1.81rem] bg-coral-100 rounded-3xs flex flex-row items-center justify-end whitespace-nowrap hover:bg-chocolate-100"
                    >
                      <div class="relative text-[0.94rem] leading-[1.25rem] font-semibold font-poppins text-white text-left z-[1]">
                        Add New
                      </div>
                    </Link>
                  </>
                ))}

              <div class="flex w-[200px]  flex-row items-start justify-start gap-[0.25rem]">
                <div class="rounded-lg bg-white flex flex-row items-center justify-start py-[0.25rem] pr-[0.56rem] pl-[0.5rem] gap-[0.38rem]">
                  <div class="relative font-medium">
                    <DateRangePicker
                      onChange={handleDateRangeChange}
                      editable={false}
                      placement="bottomEnd"
                      direction="vertical"
                      placeholder="Select Date"
                      renderValue={([start, end]) => {
                        return (
                          format(start, "MMM d") + " - " + format(end, "MMM d")
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col mt-10 items-end justify-start gap-[0.5rem]  max-w-full">
            <div className="w-[68.31rem] relative text-[1.13rem] pb-0 tracking-[-0.02em] capitalize font-medium font-poppins text-black whitespace-pre-wrap text-left inline-block max-w-full">
              <div className="flex justify-between pr-4">
                <p>Workflow ID</p>
                <p>Name</p>
                <p className="ml-2">Created</p>
                <p className="pl-2">Status</p>
                <p className="pl-5 pr-3">Users</p>
                {!user ||
                  (user.role == "Admin" && (
                    <>
                      <p>IsActive</p>
                      <p className="pr-1">Edit</p>
                      <p className="d-flex justify-end pr-5">Action</p>
                    </>
                  ))}
              </div>
            </div>

            <div className="w-full space-y-3 overflow-y-auto scrollbar-thumb-dark-700 h-[450px]">
              {filteredProjects.map((workspace) => (
                <div
                  key={workspace.id}
                  className="self-stretch rounded-2xl bg-white box-border flex items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] max-w-full border-[1px] border-solid border-whitesmoke"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="text-[0.88rem] ml-8 tracking-[-0.02em] font-poppins text-bodytext-50">
                      {workspace.id}
                    </div>
                    <div className=" w-[100px] text-[0.88rem] ml-8 tracking-[-0.02em] font-poppins text-bodytext-50">
                      {workspace.name.length > 10
                        ? `${workspace.name.slice(0, 10)}...`
                        : workspace.name}
                    </div>
                    <div className="text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50">
                      {formatDate(workspace.created_at)}
                    </div>
                    <div className="text-[0.88rem] d-flex justify-content-center w-[100px]  tracking-[-0.02em] font-poppins text-bodytext-50">
                      <button className="cursor-pointer py-[0.31rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex items-center justify-center border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:border-chocolate-100">
                        <div className="text-[0.88rem] flex items-center justify-center leading-[1.25rem] font-manrope text-coral-100">
                          {workspace.status}
                        </div>
                      </button>
                    </div>
                    <div className="flex items-center">
                      <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ bgcolor: "background.paper" }}
                      >
                        <ListItemButton
                          id="lock-button"
                          aria-haspopup="listbox"
                          aria-controls="lock-menu"
                          aria-label="when device is locked"
                          aria-expanded={open ? "true" : undefined}
                          onClick={(event) =>
                            handleClickListItem(event, workspace.id)
                          }
                        >
                          <img
                            className="h-[1.5rem]"
                            loading="lazy"
                            alt=""
                            src={p3}
                          />
                          <img
                            className="ml-[-10px] h-[1.5rem]"
                            loading="lazy"
                            alt=""
                            src={p2}
                          />
                          <img
                            className="ml-[-10px] h-[1.5rem]"
                            loading="lazy"
                            alt=""
                            src={p4}
                          />
                        </ListItemButton>
                      </List>
                      <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "lock-button",
                          role: "listbox",
                          className:
                            "bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto",
                        }}
                      >
                        {!users ||
                        users.length === 0 ||
                        users.every((user) => !user.isWorkflowAssign) ? (
                          <MenuItem disabled>No users found</MenuItem>
                        ) : (
                          users.map((user, index) =>
                            !user.isWorkflowAssign ? null : (
                              <MenuItem
                                key={index}
                                disabled={index === 0}
                                selected={index === selectedIndex}
                                onClick={(event) =>
                                  handleMenuItemClick(event, index)
                                }
                                className="px-4 py-3 flex items-center"
                              >
                                <div className="mr-4">
                                  {user.profilePic ? (
                                    <img
                                      className="h-12 w-12 rounded-full"
                                      src={user.profilePic}
                                      alt=""
                                    />
                                  ) : (
                                    <span className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                                      <img
                                        className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center"
                                        loading="lazy"
                                        alt=""
                                        src={p2}
                                      />
                                    </span>
                                  )}
                                </div>
                                <div>
                                  <ListItemText
                                    primary={`User ID: ${user.id}`}
                                    className="text-gray-800 mb-1"
                                  />
                                  <ListItemText
                                    primary={`Name: ${user.name}`}
                                    className="text-gray-600 text-sm"
                                  />
                                </div>
                              </MenuItem>
                            )
                          )
                        )}
                      </Menu>
                    </div>
                    {!user ||
                      (user.role == "Admin" && (
                        <>
                          <div className=" tracking-[-0.02em] font-poppins text-bodytext-50">
                            <Form>
                              <Form.Check
                                type="switch"
                                id={`custom-switch-${workspace.id}`}
                                checked={workspace.isActive}
                                onChange={() =>
                                  handleSwitchChange(
                                    workspace.id,
                                    workspace.isActive
                                  )
                                }
                              />
                            </Form>
                          </div>
                          <div className="text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50">
                            <button
                              onClick={() => handleEditProject(workspace.id)}
                              className="no-underline bg-white"
                            >
                              <div className="flex items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative">
                                <div className="absolute inset-0 rounded-xl bg-coral-200"></div>
                                <div className="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100">
                                  
                                </div>
                              </div>
                            </button>
                          </div>
                          <div className="text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50">
                            <button
                              onClick={() => openPopup(workspace.id)}
                              className="bg-white justify-end"
                            >
                              <img
                                className="h-[1.25rem] w-[1.28rem] relative"
                                alt=""
                                src={threedots}
                              />
                            </button>
                          </div>
                        </>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Workflow;
