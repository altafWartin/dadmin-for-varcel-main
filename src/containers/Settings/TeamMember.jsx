import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import { Link } from "react-router-dom";
import close from "../../assets/Icon/close.png";
import logo from "../../assets/logo.svg";
import setting from "../../assets/Icon/setting.svg";
import threedots from "../../assets/Icon/threedots.svg";
import profile from "../../assets/Icon/profile-user 1.svg";
import p2 from "../../assets/Images/p2.svg";
import icon4 from "../../assets/Icon/icon-4.svg";
import p3 from "../../assets/Images/p3.svg";
import p4 from "../../assets/Images/p4.svg";
import plusicon from "../../assets/Icon/plusicon.svg";
import send from "../../assets/Icon/send.svg";
import icon1 from "../../assets/Icon/icon-1.svg";
import icon2 from "../../assets/Icon/icon-2.svg";
import icon3 from "../../assets/Icon/icon-3.svg";
import "./AddMember/AddMember.css";

import ArrowRight from "../../assets/Icon/ArrowRight.svg";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

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

const TeamMember = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("project");
  const [isAssignPopupOpen, setAssignPopupOpen] = useState(false);

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
    console.log("open assign popup");
    setAssignPopupOpen(true);
  };

  const closeAssignPopup = () => {
    setAssignPopupOpen(false);
    setPopupOpen(false);
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

  return (
    <div className="containerBody">
      {" "}
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

        <div class="setting-instance pr-3">
          <div class="calendar6">
            <img class="icon3" alt="" src={calendar} />

            <div class="date3">Oct 16 - Oct 23</div>
            <img class="iconarrow-down3" alt="" src={arrowdown} />
          </div>
          <div class="calendar7">
            <img class="setting-icon3" alt="" src={setting} />
          </div>
        </div>
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
                <div class="relative font-medium z-[1]">Team members</div>
                <div class="relative text-[0.875rem] capitalize text-darkslategray-100 z-[2]">
                  developer
                </div>
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
                            <p>{`projects id ${index}`}</p>
                            <p class="ml-8">avala project</p>
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
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
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
                            <p>{`Workspace id ${index}`}</p>
                            <p class="ml-8">avala project</p>
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
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
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
                            <p>{`Workflows id ${index}`}</p>
                            <p class="ml-8">avala project</p>
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
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
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
                            <p>{`Container id ${index}`}</p>
                            <p class="ml-8">avala project</p>
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
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
              <div class="self-stretch rounded-2xl bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[2.31rem] pl-[1.31rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq1050:flex-wrap">
                <div class="h-[4.75rem] w-[69.94rem] relative rounded-2xl bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke"></div>
                <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <div class="relative text-[1rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-bodytext-100 text-left z-[1]">
                    Avala Project
                  </div>
                </div>
                <div class="w-[34rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border max-w-full">
                  <div class="self-stretch flex flex-row items-end justify-between min-h-[2.06rem] gap-[1.25rem] mq750:flex-wrap">
                    <div class="w-[7.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <div class="self-stretch relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Carter Mango
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
                      <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 text-left z-[1]">
                        Sun, 10 May 2022
                      </div>
                    </div>
                    <div class="w-[7.38rem] flex flex-col items-start justify-start">
                      <button class="cursor-pointer py-[0.31rem] pr-[0.75rem] pl-[0.69rem] bg-[transparent] rounded-3xs flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-coral-100 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                        <div class="h-[1.94rem] w-[3.19rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-coral-100"></div>
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-manrope text-coral-100 text-left z-[1]">
                          New
                        </div>
                      </button>
                    </div>

                    <div className="">
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
                  <div class="flex flex-row items-center justify-start gap-[1rem]">
                    <Link to="/editWorkspace" className="no-underline">
                      <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                        <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                        <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                          
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* <i class="bi bi-pencil-square relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]"></i> */}
                  <button className="bg-white" onClick={openPopup}>
                    <img
                      class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                      alt=""
                      src={threedots}
                    />
                  </button>
                </div>
              </div>
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
