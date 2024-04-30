import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

const Workspace = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [shouldFetchData, setShouldFetchData] = useState(true);

  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);

  const notifyDelete = () => toast.success("Project deleted successfully");
  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetchData) {
        const token = localStorage.getItem("token");
        try {
          const response = await fetch(
            "https://d-admin-backend.onrender.com/api/workspace/all-workspaces",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response.json();
          console.log("API Response:", data); // Log the response
          if (data.success) {
            setWorkspaces(data.data.rows);
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
  }, [shouldFetchData, workspaces]);

  console.log(workspaces);

  const handleEditWorkspace = async (projectId) => {
    try {
      const token = localStorage.getItem("token");

      // Make your PATCH request here
      const response = await fetch(
        `https://d-admin-backend.onrender.com/api/project/update-project/${projectId}`,
        {
          method: "PATCH",
          Authorization: `Bearer ${token}`,
        }
      );
      const data = await response.json();
      console.log("Edit project response:", data);

      // Navigate to the /editProject route with project data
      navigate("/editWorkspace", { state: { project: data } });
    } catch (error) {
      console.error("Error editing project:", error);
      // Handle errors or show an error message to the user
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredProjectIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredProjectIndex(null);
  };

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [isAssignPopupOpen, setAssignPopupOpen] = useState(false);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(null);

  const openPopup = (workspaceId) => {
    setPopupOpen(true);
    setSelectedWorkspaceId(workspaceId); // Assuming you have a state to store the selected project ID
  };
  const handleDeleteWorkspace = async (selectedWorkspaceId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://d-admin-backend.onrender.com/api/workspace/delete-workspace/${selectedWorkspaceId}`,
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
        closePopup();
        setShouldFetchData(true); // Set shouldFetchData to true after successful deletion
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
    setPopupOpen(false);
    notifyDelete();
  };

  const openAssignPopup = () => {
    console.log("open assign popup");
    setAssignPopupOpen(true);
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

  return (
    <div>
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
              Assign Workspace to Users
            </div>
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
                  const { index, userName, profilePicture } = user;
                  const labelId = `checkbox-list-secondary-label-${index}`;

                  return (
                    <ListItem
                      key={index}
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(index)}
                          checked={checked.indexOf(index) !== -1}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemAvatar>
                          <Avatar
                            src={require("../../assets/Images/Profile.jpeg")}
                            // src={profilePicture}
                            alt={userName}
                          />
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={userName} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </div>
            <div className="d-flex justify-content-end">
              <button
                onClick={closeAssignPopup}
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
                <button class="mb-3 w-full top-[0rem] right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200">
                  Start
                </button>
                <button class=" mb-3 w-full  right-[0rem] left-[0rem]  hover:bg-coral-100  rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200">
                  Stop
                </button>
                <button class=" mb-3 w-full  right-[0rem] left-[0rem]  hover:bg-coral-100  rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200">
                  Recreate
                </button>
                <button
                  onClick={() => handleDeleteWorkspace(selectedWorkspaceId)}
                  class="mb-3 w-full top-[0rem] right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
                >
                  Delete
                </button>
                <button
                  onClick={openAssignPopup}
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
                Workspace Actions
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
              Workspace
            </h2>
            <div class="flex flex-row items-start justify-start gap-[1.38rem] max-w-full text-right text-[0.75rem] mq450:flex-wrap">
              <Link
                to="/addNewWorkspace"
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
                <p>Workspace ID</p>
                <p className="">Name</p>
                <p className="ml-10">Created</p>
                <p className="pl-8">Status</p>
                <p className="">IsActive</p>
                <p className="pl-5">Users</p>
                <p className="pr-3">Edit</p>
                <p className="d-flex justify-end pr-5">Action</p>
              </thead>
            </div>

            <tbody className="w-full space-y-3 overflow-y-auto scrollbar-thumb-dark-700 h-[450px]">
              {workspaces.map((workspace) => (
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
                    onMouseEnter={() => handleMouseEnter(workspaces.index)}
                    onMouseLeave={handleMouseLeave}
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

                    {hoveredProjectIndex === workspaces.index && (
                      <div className="user-list absolute h-[12rem] overflow-y-auto bg-gray-100 bg-opacity-70 z-10">
                        <List>
                          {users.map((user) => (
                            <ListItem
                              onClick={handleListItemClick}
                              key={user.index}
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
                        onClick={() => handleEditWorkspace(workspace.id)}
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
        </section>
      </div>
    </div>
  );
};

export default Workspace;
