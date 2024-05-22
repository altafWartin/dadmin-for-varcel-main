import React, { useEffect, useState } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Settings.css";
import calendar from "../../assets/Icon/calendar.svg";
import orgcalendar from "../../assets/Icon/orgcalendar.svg";
import EditButton from "../../assets/Icon/EditButton.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";
import Deleteiconn from "../../assets/Icon/Deleteiconn.svg";
import clipboard from "../../assets/Icon/clipboard-text.svg";
import clock from "../../assets/Icon/clock.svg";
import ArrowRight from "../../assets/Icon/ArrowRight.svg";
import file2 from "../../assets/Images/File 2.png";

const formatDate = (dateString) => {
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to get the correct month (0-indexed)
  const date = dateObject.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${date}`;
};

const Settings = () => {
  const [members, setMembers] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [shouldFetchData, setShouldFetchData] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, [shouldFetchData]);

  const notifyDelete = () => toast.success("User deleted successfully");

  const fetchMembers = () => {
    const token = localStorage.getItem("token");

    fetch("https://d-admin-backend.onrender.com/api/user/all-member", {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMembers(data.data.rows);
          setShouldFetchData(false); // Set shouldFetchData to true after successful deletion
        } else {
          console.error("Failed to fetch members:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      });
  };

  console.log(members);

  const handleEditClick = (memberId) => {
    navigate(`/settings/editMemberInfo/${memberId}`);
  };

  const handleSwitchChange = (event) => {
    const isChecked = event.target.checked; // Check if the switch is checked or not
    const memberId = event.target.id.split("-")[2]; // Extract the member ID from the switch's ID

    // Update the active status locally
    const updatedMembers = members.map((member) =>
      member.id === memberId ? { ...member, isActive: isChecked } : member
    );

    // Call the API to update the active status
    fetch(
      "https://d-admin-backend.onrender.com/api/user/change-active-inactive",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          id: memberId,
          isActive: isChecked,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update active status");
        }
        // Assuming you have access to the updatedMembers array and can update its state
        setMembers(updatedMembers);
        setShouldFetchData(true); // Set shouldFetchData to true after successful deletion

        console.log("Active status updated successfully");
      })
      .catch((error) => {
        console.error("Error updating active status:", error);
        // Revert the local update if the API call fails
        // Assuming you have access to the members array and can update its state
        setMembers(members);
      });
  };

  const handleDeleteMember = (memberId) => {
    const token = localStorage.getItem("token");

    fetch(
      `https://d-admin-backend.onrender.com/api/user/delete-member/${memberId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Update the list of members after successful deletion
          const updatedMembers = members.filter(
            (member) => member.id !== memberId
          );
          setMembers(updatedMembers);
          setShouldFetchData(true); // Set shouldFetchData to true after successful deletion

          console.log("Member deleted successfully.");
          notifyDelete();
        } else {
          console.error("Failed to delete member:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error deleting member:", error);
      });
  };

  const navigateToTeamMember = (memberId) => {
    navigate(`/settings/teamMember/${memberId}`);
  };

  return (
    <div className="containerBody">
      <ToastContainer />
      <section class="workspace-setting-frame">
        <div class="user-setting-frame">
          <h2 class="settings9">Settings</h2>
          <img class="date-text-icon1" alt="" src={ArrowRight} />

          <div class="setting-instance">
            <div class="calendar6">
              <img class="icon3" alt="" src={calendar} />

              <div class="date3">Oct 16 - Oct 23</div>
              <img class="iconarrow-down3" alt="" src={arrowdown} />
            </div>
            <div class="calendar7">
              <img class="setting-icon3" alt="" src={setting} />
            </div>
          </div>
          <div class="team-members">Team members</div>
        </div>
        <div class="rectangle-parent2">
          <div class="frame-child6"></div>
          <div
            className="Vector306"
            style={{
              width: 0,
              height: 36,
              marginTop: "70px",
              border: "2px #FF8548 solid",
            }}
          ></div>
          <div class="settings-panel">
            <img
              class="settings-panel-child"
              loading="eager"
              alt=""
              src={clipboard}
            />

            <img
              class="settings-panel-item"
              loading="eager"
              alt=""
              src={orgcalendar}
            />

            <img
              class="settings-panel-inner"
              loading="eager"
              alt=""
              src={clock}
            />
          </div>
          <div class="add-member-group-wrapper">
            <div class="add-member-group">
              <Link to="/addMember" class="add-member1 linkText">
                Add member
              </Link>
              <Link class="team-members1 linkText">Team members</Link>
              <Link to="/changePassword" class="change-password2 linkText">
                change password
              </Link>
            </div>
          </div>

          <div class="avatar-frame1">
            <h3 class="team-members2">Team members</h3>
            <ul class="pl-0 space-y-3 overflow-y-auto scrollbar-thumb-dark-700 h-[450px]">
              {members.map((member) => (
                <li key={member.id} class="user-detai flex mb-2 mr-5">
                  <div className=" w-full flex justify-between gap-2">
                    <div className="w-full flex justify-start">
                      <div class="team-members-l">
                        <button
                          class="no-underline flex bg-white text-gray-900"
                          onClick={() => navigateToTeamMember(member.id)}
                        >
                          <img
                            class="team-members-list-item mr-3"
                            loading="eager"
                            alt=""
                            src={file2}
                          />

                          <div class="john-fred-group">
                            <div class="john-fred1">{member.fullName}</div>
                            <div class="johnfredgmailcom1">
                              {member.email.length > 15
                                ? `${member.email.slice(0, 12)}...`
                                : member.email}
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="w-full  flex justify-end">
                      <div className="w-[200px] bg-oraangelight h-[80%] flex items-center justify-center">
                        <button className="flex items-center justify-center h-full w-full">
                          <div className="project-manager">{member.role}</div>
                        </button>
                      </div>

                      <button
                        onClick={() => handleDeleteMember(member.id)}
                        className=" h-[60px] w-[]60px] mx-3 mt-2 bg-white d-flex justify-content-center align-items-center"
                      >
                        <img
                          class="delete-icon justify-content-center align-items-center"
                          loading="eager"
                          alt=""
                          src={Deleteiconn}
                        />
                      </button>
                      <div class=" w-[100px] toggle-button mx-8 d-flex justify-content-center align-items-center">
                        <Form className="content-center">
                          <Form.Check
                            type="switch"
                            id={`custom-switch-${member.id}`}
                            className="custom-switch content-center"
                            label={member.isActive ? "Active" : "Inactive"}
                            checked={member.isActive}
                            onChange={handleSwitchChange}
                          />
                        </Form>
                      </div>
                      <button
                        className=" h-[60px] w-[]60px] mx-3 mt-2 bg-white d-flex justify-content-center align-items-center"
                        onClick={() => handleEditClick(member.id)}
                      >
                        <img
                          className="delete-icon justify-content-end align-items-center "
                          loading="eager"
                          alt=""
                          src={EditButton}
                        />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
