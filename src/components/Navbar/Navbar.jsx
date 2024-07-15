import React, { useState, useEffect } from "react";
// import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import search from "../../assets/Icon/search.svg";

import Notification from "../../assets/Icon/Notification.svg";
import CustomDateRangePicker from "../DateRangePickerComponent"

import logout from "../../assets/Icon/logout.svg";
import Profile from "../../assets/Images/Profile.jpeg";
import {
  Dropdown,
  DropdownItem,
  ButtonGroup,
  SplitButton,
} from "react-bootstrap";

const Navbar = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [loginUser, setLoginUser] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };
  console.log(loginUser, "setLoginUser");
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user");

    // Parse the JSON data if it exists
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setFullName(parsedUserData.fullName);
      setEmail(parsedUserData.email);
      setLoginUser(parsedUserData);
    }
  }, []);

  // Function to handle form submission
  const handleFileUpload = async (event) => {
    event.preventDefault();

    try {
      console.log("Starting file upload...");

      const formData = new FormData();
      formData.append("file", file);

      console.log("FormData created:", formData);

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      console.log("Token found:", token);

      const response = await fetch(
        `${apiUrl}/api/user/update-profile-pic`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      console.log("Response received:", response);

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const responseData = await response.json();
      console.log("Response data:", responseData);

      // Check if the response has the expected structure
      if (responseData.success && responseData.data) {
        const updatedUser = responseData.data;
        console.log("Updated User Data:", updatedUser);

        // Update user data in local storage
        localStorage.setItem("user", JSON.stringify(updatedUser));
      } else {
        throw new Error("Invalid response structure");
      }

      setUploadStatus("Image uploaded successfully");
      console.log("Image uploaded:", responseData);
    } catch (error) {
      setUploadStatus("Error uploading image");
      console.error("Error uploading image:", error);
    }
  };

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Navigate to the login page
    navigate("/login");
  };

  const [currentVal, setCurrentVal] = useState("");

  const onClick = (value) => {
    if (value === "changePassword") {
      setCurrentVal("Change Password");
      navigate("/changePassword");
    } else if (value === "updateProfile") {
      setCurrentVal("Update Profile");
      document.querySelector('input[type="file"]').click();
    } else if (value === "logout") {
      setCurrentVal("Logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // Navigate to the login page
      navigate("/login");
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Change Password", "Update Profile", "Logout"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClick = (option) => {
    setSelectedOption(option);
    // Add logic here for what happens when an option is selected
    console.log(`Selected Option: ${option}`);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div>
      <header class="self-stretch z-2000  bg-white flex flex-row items-center justify-between py-[1rem] pr-[0.7rem] ml-[17.75rem] gap-[1.25rem] top-[0] z-[0] sticky text-left text-[0.88rem] text-text-100 font-poppins lg:pl-[1.38rem] lg:pr-[1.5rem] lg:box-border">
        <div class="h-[2.5rem] w-[18.56rem] "></div>
        <div class="flex flex-row items-center justify-start gap-[2rem] mq450:gap-[2rem]">

          <div className="flex flex-row items-center justify-start gap-[0.94rem]">
            <div className="flex flex-col items-end justify-start">
              <div className="flex items-center font-semibold">{fullName}</div>
              <div className="text-[0.69rem] text-bodytext-50">{email}</div>
            </div>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                style={{ zIndex: 1 }} // Overlay the input on top of the profile image
              />
              <img
                className="h-[2.75rem] w-[2.75rem] relative rounded-3xl object-cover cursor-pointer"
                alt="Profile Picture"
                src={Profile}
                onClick={() =>
                  document.querySelector('input[type="file"]').click()
                } // Open file input on profile image click
              />
            </div>
            <div>
              <Dropdown onToggle={handleDropdownToggle}>
                <Dropdown.Toggle
                  variant="white"
                  id="dropdown-basic"
                ></Dropdown.Toggle>
                <Dropdown.Menu style={{ height: "60px", padding: "5px", position: "absolute", zIndex: 999 }}>
                  <DropdownItem style={{ padding: "0px", }}
                    onClick={() => onClick("changePassword")}
                    eventKey={1}
                  >
                    Change Password
                  </DropdownItem>
      
                  <DropdownItem style={{ padding: "0px", }}
                    onClick={() => onClick("logout")} eventKey={3}>
                    Logout
                  </DropdownItem>
                </Dropdown.Menu>
              </Dropdown>
            </div>


          </div>
          <div className="hidden">

            <CustomDateRangePicker isDropdownOpen={isDropdownOpen} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
