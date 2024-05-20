import React, { useState,  useEffect } from "react";
// import styles from "./Navbar.module.css";
import { Link,useNavigate } from "react-router-dom";
import search from "../../assets/Icon/search.svg";

import Notification from "../../assets/Icon/Notification.svg";

import logout from "../../assets/Icon/logout.svg";
import Profile from "../../assets/Images/Profile.jpeg";

import { Dropdown, Ripple, initTE } from "tw-elements";

initTE({ Dropdown, Ripple });

const Navbar = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [loginUser, setLoginUser] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
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
        "https://d-admin-backend.onrender.com/api/user/update-profile-pic",
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

  return (
    <div>
      <header class="self-stretch z-2000  bg-white flex flex-row items-center justify-between py-[1rem] pr-[3rem] pl-[17.75rem] gap-[1.25rem] top-[0] z-[0] sticky text-left text-[0.88rem] text-text-100 font-poppins lg:pl-[1.38rem] lg:pr-[1.5rem] lg:box-border">
        <div class="h-[2.5rem] w-[18.56rem] rounded-xl bg-ghostwhite box-border flex flex-row items-start justify-start py-[0.69rem] px-[0.75rem] relative gap-[1.31rem] border-[1px] border-solid border-stroke">
          <div class="h-[2.5rem] w-[18.56rem] relative rounded-xl bg-ghostwhite box-border hidden z-[0] border-[1px] border-solid border-stroke"></div>
          <input
            class="w-[7.5rem] [border:none] [outline:none] font-poppins text-[0.75rem] bg-[transparent] h-[1.13rem] absolute my-0 mx-[!important] top-[0.69rem] left-[3.19rem] text-bodytext-50 text-left flex items-center z-[1]"
            placeholder="Search "
            type="text"
          />

          <img
            class="h-[45%] w-[6.06%] absolute my-0 mx-[!important] top-[27.5%] right-[89.87%] bottom-[27.5%] left-[4.07%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src={search}
          />
        </div>
        <div class="flex flex-row items-center justify-start gap-[2rem] mq450:gap-[2rem]">
          <div class="flex flex-row items-start justify-start gap-[1rem]">
            <img
              class="h-[2.5rem] w-[2.5rem] relative object-contain min-h-[2.5rem]"
              loading="eager"
              alt=""
              src={Notification}
            />
          </div>
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
            <button className="bg-white"  onClick={handleLogout}>
              <img
                className="h-[1.25rem] w-[1.25rem] relative cursor-pointer"
                alt="Logout"
                src={logout}
              />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
