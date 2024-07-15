import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";


import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"; // Importing components from Material-UI

import "./AddMember.css";
import logo from "../../../assets/logo.svg";

import calendar from "../../../assets/Icon/calendar.svg";
import arrowdown from "../../../assets/Icon/arrowdown.svg";
import setting from "../../../assets/Icon/setting.svg";

import ArrowRight from "../../../assets/Icon/ArrowRight.svg";

const AddMember = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [token, setToken] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const roles = ["Admin", "Project Manager", "Developer"];
  const navigate = useNavigate();
  const notify = () => toast.ok("Member add successfully");

  useEffect(() => {
    // Get token from localStorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

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
        <div class="team-members">Add Member</div>
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

          <h3 class="title7">Add new member</h3>
          <div class="label-parent">
            <div class="label1">
              Improve business performance with Comvi dashboards
            </div>

            <Formik
              initialValues={{
                fullName: "",
                email: "",
                password: "",
                role: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.fullName) {
                  errors.fullName = "Required";
                }
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                if (!values.password) {
                  errors.password = "Required";
                } else if (values.password.length < 8) {
                  errors.password =
                    "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.";
                }

                if (!values.role) {
                  errors.role = "Required";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                console.log("Form values:", values); // Log form values
                try {
                  const response = await fetch(
                    `${apiUrl}/api/user/add-member`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // Include token in the Authorization header
                      },
                      body: JSON.stringify(values),
                    }
                  );

                  console.log("Response status:", response.status); // Log response status

                  if (!response.ok) {
                    throw new Error("Invalid email or password");
                  }

                  const data = await response.json();
                  console.log("API response data:", JSON.stringify(data)); // Log API response data

                  // Navigate to the home page
                  // Assuming navigate("/") is your navigation function
                  navigate("/settings"); // Use navigate to navigate to a different route
                } catch (error) {
                  console.error("Error adding member:", error.message);
                } finally {
                  setSubmitting(false); // Reset submitting state
                }
              }}
            >
              {({ handleSubmit, isSubmitting, setFieldValue, values }) => (
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="input12">
                    <div className="title-frame1">
                      <div className="title8">Full Name</div>
                    </div>
                    <Field
                      className="input13 px-3"
                      placeholder="Full Name"
                      id="fullName"
                      name="fullName" // This should match the key in initialValues and the name attribute in the Field component
                      type="text"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="input12">
                    <div className="title-frame1">
                      <div className="title8">Email Address</div>
                    </div>
                    <Field
                      className="input13 px-3"
                      placeholder="Email Address"
                      id="email"
                      name="email"
                      type="text"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="input12">
                    <div className="title-frame1">
                      <div className="title8">Password</div>
                    </div>
                    <Field
                      className="input13 px-3"
                      placeholder="Password"
                      id="password"
                      name="password"
                      type="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="input12">
                    <div className="title-frame1">
                      <div className="title8">Role</div>
                    </div>
                    <FormControl fullWidth>
                      {/* <InputLabel id="role-select-label">Select Role</InputLabel> */}
                      <Field
                        name="role"
                        as={Select}
                        labelId="role-select-label"
                        id="role-select"
                        value={values.role}
                        onChange={(event) =>
                          setFieldValue("role", event.target.value)
                        }
                      >
                        {roles.map((role) => (
                          <MenuItem key={role} value={role}>
                            {role}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </div>
                  <div className="input-instance">
                    <button
                      type="submit"
                      disabled={isSubmitting}
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
                      <b className="add-new-member">Add New Member</b>
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMember;
