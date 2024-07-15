import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"; // Importing components from Material-UI

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddMember/AddMember.css";
import logo from "../../assets/logo.svg";
import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";
import ArrowRight from "../../assets/Icon/ArrowRight.svg";

const EditMemberInfo = () => {  const apiUrl = process.env.REACT_APP_API_URL;

  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [memberData, setMemberData] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const roles = ["Admin", "Project Manager", "Developer"];
  const { memberId } = useParams();
  const id = memberId;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMemberData = async () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
      try {
        const response = await fetch(
          `${apiUrl}/api/user/get-member/${memberId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch member data");
        }
        const memberData = await response.json();
        console.log("Member data:", memberData);
        setFullName(memberData.data.fullName || "");
        setEmail(memberData.data.email || "");
        setPassword(memberData.data.password || "");
        setRole(memberData.data.role || "");
        setMemberData(memberData.data);
        
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    };

    fetchMemberData();
  }, [memberId, token]);

  console.log("pass", password);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        id,
        fullName,
        email,
        role,
      };

      if (password !== "") {
        requestBody.password = password;
      }

      const response = await fetch(
        `${apiUrl}/api/user/update-member`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(requestBody),
        }
      );

      console.log("Request body:", requestBody);
      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
      console.log("API response data:", data);

      // Navigate to the home page
      // Assuming navigate("/") is your navigation function
      navigate("/settings"); // Use navigate to navigate to a different route
    } catch (error) {
      console.error("Error adding member:", error.message);
    }
  };

  const notify = () => toast.ok("Member added successfully");

  return (
    <div className="containerBody">
      <ToastContainer />
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
        <div class="team-members">Edit Member</div>
      </div>
      <div class="input-parent1">
        <div class="input10">
          <div class="input11"></div>
          <div class="chevron-down4">
            <div class="chevron-down5"></div>
          </div>
          <div class="placeholder5">role</div>
          <div class="title6">role</div>
        </div>
        <div class="frame-child4"></div>
        <div class="input-with-title">
          <img
            class="input-with-title-child"
            loading="eager"
            alt=""
            src={logo}
          />
          <h3 class="title7">Edit member</h3>
          <div class="label-parent">
            <div class="label1">
              Improve business performance with Comvi dashboards
            </div>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="input12">
                <div className="title-frame1">
                  <div className="title8">Full Name</div>
                </div>
                <input
                  className="input13 px-3"
                  placeholder="Full Name"
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="input12">
                <div className="title-frame1">
                  <div className="title8">Email Address</div>
                </div>
                <input
                  className="input13 px-3"
                  placeholder="Email Address"
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input12">
                <div className="title-frame1">
                  <div className="title8">Password</div>
                </div>
                <input
                  className="input13 px-3"
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="email"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input12">
                <div className="title-frame1">
                  <div className="title8">Role</div>
                </div>
                <FormControl fullWidth>
                  <Select
                    labelId="role-select-label"
                    id="role-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    {roles.map((role) => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* <input
                  className="input13 px-3"
                  placeholder="Role"
                  id="role"
                  name="role"
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                /> */}
              </div>
              <div className="input-instance">
                <button
                  type="submit"
                  className="add-member-input bg-transparent bg-white"
                >
                  <div className="input20">
                    <div className="input21"></div>
                    <div className="chevron-down6">
                      <div className="chevron-down7"></div>
                    </div>
                    <div className="placeholder10"></div>
                    <div className="title12">Country</div>
                  </div>
                  <b className="add-new-member">Save</b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditMemberInfo;
