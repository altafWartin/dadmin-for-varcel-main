import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css"; // Import your component-specific CSS file
import logo from "../../assets/logo.svg";
import google from "../../assets/Icon/google.png";
import twitter from "../../assets/Icon/twitter.png";

const Login = () => {
  const [formType, setFormType] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const notify = () => toast.error("Enter correct email and password");

  return (
    <div className="w-full relative px-8 pt-8 pb-8 h-screen bg-ghostwhite shadow-md overflow-hidden flex items-center justify-center">
      <ToastContainer />
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
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
            errors.password = "Password must be at least 8 characters long";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("Form values:", values); // Log form values
          try {
            const response = await fetch(
              `https://d-admin-backend.onrender.com/api/user/login`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }
            );
            // helo
            console.log("Response status:", response.status); // Log response status

            if (!response.ok) {
              throw new Error("Invalid email or password");
            }

            const data = await response.json();
            console.log("API response data:", JSON.stringify(data)); // Log API response data

            const {
              token,
              data: { findUser },
            } = data; // Updated line to extract token and findUser

            console.log("User:", findUser); // Log the user object
            console.log("Tokennn:", data?.data?.token);

            // Store the access token in local storage
            localStorage.setItem("token", data?.data?.token);

            // Store the user details in local storage
            localStorage.setItem("user", JSON.stringify(findUser));

            // Navigate to the home page
            navigate("/dashboard"); // Assuming navigate("/") is your navigation function
          } catch (error) {
            notify(); // Notify user of error
            console.error("Error logging in:", error.message);
          } finally {
            setSubmitting(false); // Reset submitting state
          }
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form
            onSubmit={handleSubmit}
            className="mx-10  w-full md:w-1/4 max-w-[500px] rounded-3xl bg-white pt-4 pb-4 pr-4 pl-4 gap-2 z-2 md:pl-6 md:pr-6 md:box-border lg:pt-5 lg:pb-5 lg:box-border"
          >
            <div className="w-full flex flex-col items-center justify-start gap-1">
              <img
                className="w-9 h-8 relative"
                loading="eager"
                alt=""
                src={logo}
              />
              <h3 className="m-0 relative text-lg leading-10 capitalize font-medium font-poppins text-darkslategray-100 text-left whitespace-nowrap">
                Sign In
              </h3>
              <div className="w-full flex flex-col items-start justify-start pt-2 pb-1 relative gap-2">
                <div className="text-sm leading-5 uppercase font-semibold font-poppins text-dimgray-200 text-left">
                  Email Address
                </div>
                <Field
                  className="w-full outline-none bg-transparent px-3 h-10 relative rounded-lg box-border min-w-[14.69rem] border-1 border-solid border-darkslategray-200"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start pt-2 pb-1 relative gap-2">
                <div className="text-sm leading-5 uppercase font-semibold font-poppins text-dimgray-200 text-left">
                  Password
                </div>
                <Field
                  className="w-full outline-none bg-transparent px-3 h-10 relative rounded-lg box-border min-w-[14.69rem] border-1 border-solid border-darkslategray-200"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <button
                type="submit"
                disabled={isSubmitting} // Pass the event object to handleLogin
                className=" w-full no-underline mt-12 cursor-pointer border-none p-2 bg-orange rounded-lg flex items-center justify-center box-border max-w-full whitespace-nowrap hover:bg-chocolate"
              >
                <div className="h-10 w-full relative rounded-lg bg-coral hidden"></div>
                <div className="relative text-lg leading-10 capitalize font-semibold font-poppins text-white text-left">
                  Sign In
                </div>
              </button>
              {/* <div className="w-full flex flex-col items-center justify-center"> */}
                {/* <div className=" w-full flex flex-row items-end justify-center pt-3 pb-1 box-border"> */}
                  {/* <button className="cursor-pointer py-2 pr-3 pl-4 bg-transparent flex-1 rounded-lg box-border flex items-center justify-center gap-2 max-w-full whitespace-nowrap border-1 border-solid border-darkslategray-200 hover:bg-dimgray-400 hover:border-dimgray-300"> */}
                    {/* <img */}
                      {/* className="h-6 w-6 relative object-cover min-h-6" */}
                      {/* alt="" */}
                      {/* src={google} */}
                    {/* /> */}
                    {/* <div className=" w-full relative text-sm leading-5 font-medium font-poppins text-dimgray-200 text-left"> */}
                      {/* Sign In with Google */}
                    {/* </div> */}
                  {/* </button> */}
                {/* </div> */}
                {/* <div className=" w-full flex flex-row items-end justify-center pt-3 pb-1 box-border"> */}
                  {/* <button className="cursor-pointer py-2 pr-3 pl-4 bg-transparent flex-1 rounded-lg box-border flex items-center justify-center gap-2 max-w-full whitespace-nowrap border-1 border-solid border-darkslategray-200 hover:bg-dimgray-400 hover:border-dimgray-300"> */}
                    {/* <img */}
                      {/* className="h-6 w-6 relative object-cover min-h-6" */}
                      {/* alt="" */}
                      {/* src={twitter} */}
                    {/* /> */}
                    {/* <div className=" w-full relative text-sm leading-5 font-medium font-poppins text-dimgray-200 text-left"> */}
                      {/* Sign In with Twitter */}
                    {/* </div> */}
                  {/* </button> */}
                {/* </div> */}
              {/* </div> */}
            </div>
            {/* <div className="w-full mt-3 flex flex-row items-start justify-start gap-1"> */}
              {/* <div className="text-sm leading-5 font-poppins text-dimgray-200 text-left"> */}
                {/* Already have an Account? */}
              {/* </div> */}
              {/* <Link */}
                {/* to="/signUp" */}
                {/* className="text-sm leading-5 font-medium font-poppins text-coral text-left" */}
              {/* > */}
                {/* SignUp */}
              {/* </Link> */}
            {/* </div> */}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
