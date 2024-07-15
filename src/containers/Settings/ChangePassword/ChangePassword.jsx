import React, { useState } from "react";
import "./ChangePassword.css";
import logo from "../../../assets/logo.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import calendar from "../../../assets/Icon/calendar.svg";
import arrowdown from "../../../assets/Icon/arrowdown.svg";
import setting from "../../../assets/Icon/setting.svg";

import ArrowRight from "../../../assets/Icon/ArrowRight.svg";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ChangePassword = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old Password is required"),
    newPassword: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
      )
      .required("New Password is required"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Repeat New Password is required"),
  });
  

  const handleChangePassword = async (values) => {
    const { oldPassword, newPassword } = values;

    const notifyPassword = () =>
      toast.error("New password and repeat password do not match.");
    const notifySuccess = () => toast.success("Password changed successfully!");

    // Check if new password and repeat password match
    if (newPassword !== values.repeatPassword) {
      notifyPassword();

      setErrorMessage("New password and repeat password do not match.");
      return;
    }

    const requestBody = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${apiUrl}/api/user/change-password`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        setSuccessMessage("Password changed successfully!");
        console.log(response);
        notifySuccess();
        setErrorMessage("");
      } else {
        const data = await response.json();
        setSuccessMessage("");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("");
      setErrorMessage("Network error occurred.");
    }
  };

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
        <div class="team-members">Change Password</div>
      </div>
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          repeatPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          handleChangePassword(values);
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="input-parent d-flex justify-content-center">
            <div className="input2 mb-3">
              <div className="title-container">
                <div className="title2">Current Password</div>
              </div>
              <Field
                name="oldPassword"
                type="text"
                className={`input3 px-3 ${
                  touched.oldPassword && errors.oldPassword ? "is-invalid" : ""
                }`}
                placeholder="Current Password"
              />
              <ErrorMessage
                name="oldPassword"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="input2 mb-3">
              <div className="title-container">
                <div className="title2">New Password</div>
              </div>
              <Field
                name="newPassword"
                type="text"
                className={`input3 px-3 ${
                  touched.newPassword && errors.newPassword ? "is-invalid" : ""
                }`}
                placeholder="New Password"
              />
              <ErrorMessage
                name="newPassword"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="input2">
              <div className="title-container">
                <div className="title2">Repeat New Password</div>
              </div>
              <Field
                name="repeatPassword"
                type="text"
                className={`input3 px-3 ${
                  touched.repeatPassword && errors.repeatPassword
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Repeat New Password"
              />
              <ErrorMessage
                name="repeatPassword"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 mx-10 bg-orange text-white rounded-md my-4"
            >
              Change Password
            </button>
     
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
