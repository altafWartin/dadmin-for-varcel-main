import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

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

const formatDate = (dateString) => {
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to get the correct month (0-indexed)
  const date = dateObject.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${date}`;
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [shouldFetchData, setShouldFetchData] = useState(true);

  const [isAssignPopupOpen, setAssignPopupOpen] = useState(false);
  const [userChecked, setUserChecked] = useState([]);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const [assignProjects, setAssignProjects] = useState([]);
  const [projectChecked, setProjectChecked] = React.useState([]);
  const [message, setMessage] = useState("");

  const notifyAssign = (message) => {
    toast.success(` ${message}`);
  };
  console.log("projects", projects);

  const notifyDelete = () => toast.success("Project deleted successfully");

  const [users, setUsers] = useState([]);

  console.log("users", users);

  const getAssignUsers = async (selectedProjectId) => {
    console.log("this data is from selected projectid ", selectedProjectId);
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `https://d-admin-backend.onrender.com/api/project/get-assign-project/${selectedProjectId}`, // corrected URL interpolation
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
      const userIDsProjectAssignTrue = userData
      .filter((user) => user.isProjectAssign)
      .map((user) => user.id);

    console.log("User IDs with isProjectAssign true:", userIDsProjectAssignTrue);
    setUserChecked(userIDsProjectAssignTrue)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetchData) {
        const token = localStorage.getItem("token");
        try {
          const response = await fetch(
            "https://d-admin-backend.onrender.com/api/project/all-projects",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response.json();
          console.log("API Response:", data); // Log the response
          if (data.success) {
            const sortedProjects = data.data.rows.sort((a, b) => a.id - b.id);
            setProjects(sortedProjects);
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
  }, [shouldFetchData, projects]);

  console.log(projects);

  const handleEditProject = async (projectId) => {
    navigate(`/projects/editProject/${projectId}`);
  };

  const openPopup = (projectId) => {
    setPopupOpen(true);
    console.log("openPopup", projectId);
    setSelectedProjectId(projectId); // Assuming you have a state to store the selected project ID
    console.log("popupOpen", selectedProjectId);
  };

  const handleDeleteProject = async (selectedProjectId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://d-admin-backend.onrender.com/api/project/delete-project/${selectedProjectId}`,
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

  const handleListItemClick = () => {
    console.log("handleListItem");
    navigate("/settings/teamMember");
  };


  const handleToggle = (id, isProjectAssign) => () => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isProjectAssign: !isProjectAssign } : user
    );
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
      projectId: selectedProjectId,
    };
    console.log("requestBody", requestBody);

    try {
      const response = await fetch(
        "https://d-admin-backend.onrender.com/api/project/assign-project",
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
      getAssignUsers(selectedProjectId);
      setShouldFetchData(true); // Set shouldFetchData to true after successful deletion

      setAssignPopupOpen(false);
      closePopup();

      // Handle success or further actions here
    } catch (error) {
      console.error("Error assigning projects:", error);
      // Handle error cases here
    }
  };

  const handleSwitchChange = (projectId, currentIsActive) => {
    // Do something with projectId and currentIsActive
    console.log(
      `Project ID: ${projectId}, Current IsActive: ${currentIsActive}`
    );

    const token = localStorage.getItem("token");
    const newIsActive = !currentIsActive; // Flip the currentIsActive value
    const apiUrl = `https://d-admin-backend.onrender.com/api/project/change-active-inactive`;
    const requestBody = JSON.stringify({
      id: projectId,
      isActive: newIsActive,
    });
    console.log("requestBody", requestBody);

    fetch(apiUrl, {
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

  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(1);

  const handleMouseEnter = (id) => {
    setHoveredProjectIndex(id);
  };

  const handleMouseLeave = () => {
    setHoveredProjectIndex(null);
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
              Assign Projects to Users
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
                {users.map((user) => {
                  const { id, name, isProjectAssign, profilePic } = user;
                  const labelId = `checkbox-list-secondary-label-${id}`;

                  return (
                    <ListItem
                      key={id}
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(id, isProjectAssign)}
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
          <div class="relative h-[17.31rem] text-[0.88rem] text-dimgray font-poppins">
            <div class="w-full relative h-[24.31rem]  text-[0.88rem] text-dimgray font-poppins">
              <div class="absolute w-full top-[9.19rem] right-[0rem] left-[0rem] h-[12.13rem]">
                <button
                  onClick={() => handleDeleteProject(selectedProjectId)}
                  class="mb-3 w-full top-[0rem] right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
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
                Projects Actions
              </div>

              <div class="absolute top-[4.44rem] justify-center left-[2.06rem] tracking-[-0.02em] whitespace-pre-wrap text-center inline-block w-[18.31rem]">
                Improve business performance with ABCD dashboards
              </div>
            </div>
          </div>
        </div>
      )}
      <div className=" bg-slate-100 pt-10 pl-[260px] h-[108vh]  z-[20]">
        <section class=" w-[71.25rem] px-[var(--padding-xl)] box-border text-left text-5xl text-bodytext-100 font-poppins flex justify-start flex flex-col items-start max-w-full">
          <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full text-[1.5rem] text-bodytext-100 mq750:flex-wrap">
            <h2 class="m-0 h-[2.25rem] relative text-inherit tracking-[0.02em] font-semibold font-inherit flex items-center mq450:text-[1.19rem]">
              Projects
            </h2>
            <div class="flex flex-row items-start justify-start gap-[1.38rem] max-w-full text-right text-[0.75rem] mq450:flex-wrap">
              <Link
                to="/addNewProject"
                class="cursor-pointer no-underline [border:none] py-[0.38rem] pr-[1.38rem] pl-[1.81rem] bg-coral-100 rounded-3xs flex flex-row items-center justify-end whitespace-nowrap hover:bg-chocolate-100"
              >
                <div class="h-[2rem] w-[7.63rem] relative rounded-3xs bg-coral-100 hidden"></div>
                <div class="relative text-[0.94rem] leading-[1.25rem] font-semibold font-poppins text-white text-left z-[1]">
                  Add New
                </div>
              </Link>
              <div class="flex flex-row items-start justify-start gap-[0.25rem]">
                <div class="rounded-lg bg-white flex flex-row items-center justify-start py-[0.25rem] pr-[0.56rem] pl-[0.5rem] gap-[0.38rem]">
                  <img
                    class="h-[1.31rem] w-[1.31rem] relative"
                    alt=""
                    src={calendar}
                  />

                  <div class="relative font-medium">Oct 16 - Oct 23</div>
                  <img
                    class="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
                    alt=""
                    src={arrowdown}
                  />
                </div>
                <div class="rounded-lg bg-white flex flex-row items-center justify-start p-[0.25rem]">
                  <img
                    class="h-[1.31rem] w-[1.31rem] relative"
                    alt=""
                    src={setting}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="self-stretch flex flex-col mt-10 items-end justify-start gap-[1.44rem] max-w-full">
            <div class="w-[68.31rem] relative text-[1.13rem] pb-0 tracking-[-0.02em] capitalize font-medium font-poppins text-black whitespace-pre-wrap text-left inline-block max-w-full">
              <thead className=" flex justify-between pr-4 ">
                <p>Projects ID</p>
                <p className="">Name</p>
                <p className="">Created</p>
                {/* <p className="pl-8">Status</p> */}
                <p className="pl-5">Users</p>
                <p className="">IsActive</p>
                <p className="pr-3">Edit</p>
                <p className="d-flex justify-end pr-5">Action</p>
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
                      {/* <div class="w-[7.38rem] flex flex-col items-start justify-start"> */}
                        {/* <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100"> */}
                          {/* <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div> */}
                          {/* <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]"> */}
                            {/* {project.status} */}
                          {/* </div> */}
                        {/* </button> */}
                      {/* </div> */}
                      <div>
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
                          handleClickListItem(event, project.id)
                        } // Pass event and projectId
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
                      {users.length === 0 ||
                      users.every((user) => !user.isProjectAssign) ? (
                        <MenuItem disabled>No users found</MenuItem>
                      ) : (
                        users.map((user, index) =>
                          // Assuming the condition for not showing isProjectAssign is false
                          !user.isProjectAssign ? null : (
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
                                    className="h-8 w-8 rounded-full"
                                    src={user.profilePic}
                                    alt=""
                                  />
                                ) : (
                                  <span className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                                    <img
                                      className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center"
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
                  
                    </div>
                  </div>
                  <div className="pr-4">
                        <Form className="content-center">
                          <Form.Check
                            type="switch"
                            id={`custom-switch-${project.id}`}
                            className="custom-switch content-center"
                            label={project.isActive ? "Active" : "Inactive"}
                            checked={project.isActive}
                            onChange={() =>
                              handleSwitchChange(project.id, project.isActive)
                            }
                          />
                        </Form>
                      </div>

                  <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                    <div class="flex flex-row items-center justify-start gap-[1rem]">
                      <button
                        onClick={() => handleEditProject(project.id)}
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
        </section>
      </div>
    </div>
  );
};

export default Projects;
