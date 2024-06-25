import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

import ArrowRight from "../../assets/Icon/ArrowRight.svg";

import { FormControl, Select, MenuItem } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewContainer = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [volume, setVolume] = useState("");
  const [hostname, setHostname] = useState("");
  const [ip, setIp] = useState("");
  const [network, setNetwork] = useState("");
  const [port, setPort] = useState(""); // Add this line
  const [endPoint, setEndpoint] = useState(""); // Add this line
  const [message, setMessage] = useState(""); // Add this line
  const roles = ["Admin", "Project Manager", "Developer"];

  const [seletedProjectId, setSeletedProjectId] = useState("");
  const [projects, setProjects] = useState([]);
  const [images, setImages] = useState([]);
  const [seletedImageId,setSeletedImageId] = useState("");
  console.log("projectids", seletedProjectId);

  const handleRoleChange = (event) => {
    setSeletedProjectId(event.target.value);
  };

  const handleImageChange = (event) => {
    setSeletedImageId(event.target.value);
  };

  const apiUrl = "https://d-admin-backend.onrender.com";

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      // Initialize the base URL
      let url = `${apiUrl}/api/images/all-images`;

      console.log(url);
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        console.log("API Response:", data.data); // Log the response
        const ids = data.data.rows;

        // Logging the IDs to confirm
        console.log("Extracted IDs:", ids);

        if (data.success) {
          setImages(ids);
        } else {
          console.error("Failed to fetch projects:", data.message);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []); // Ensure useEffect runs when startDate or endDate change
  
  
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      // Initialize the base URL
      let url = `${apiUrl}/api/project/all-projects`;

      console.log(url);
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        console.log("API Response:", data.data); // Log the response
        const ids = data.data.rows;

        // Logging the IDs to confirm
        console.log("Extracted IDs:", ids);

        if (data.success) {
          setProjects(ids);
        } else {
          console.error("Failed to fetch projects:", data.message);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []); // Ensure useEffect runs when startDate or endDate change

  const navigate = useNavigate();

  const notifyAddContainer = () => toast.success(message);
  const notifyError = () => toast.error(message);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      description,
      image,
      volume,
      network,
      projectId: seletedProjectId,
      hostname,
      ip,
      port,
      endPoint,
    };
    console.log(formData);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://d-admin-backend.onrender.com/api/container/add-container",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data); // Handle success response
      setMessage(data.message);
      if (data.success == true) {
        notifyAddContainer();
      } else {
        notifyError();
      }
      navigate("/container");
      // You can show a success message or redirect the user
    } catch (error) {
      // notifyerror();
      console.error("Error:", error); // Handle error
      // You can show an error message to the user
    }
  };

  return (
    <div className=" bg-slate-100  pt-10 pl-[260px] h-[180vh]">
      {" "}
      <ToastContainer />
      <section class="w-[71.125rem]  flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[2rem_0rem] max-w-full text-left text-[1.5rem] text-midnightblue font-poppins lg:gap-[5rem_0rem] mq750:gap-[5rem_0rem]">
        <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
          <div class="flex flex-row items-center justify-start gap-[0.31rem] max-w-full mq450:flex-wrap">
            <h2 class="m-0 h-[2.25rem] relative text-inherit tracking-[0.02em] font-semibold font-inherit flex items-center mq450:text-[1.19rem]">
              Container
            </h2>
            <img
              class="h-[0.69rem] w-[0.44rem] relative object-contain"
              alt=""
              src={ArrowRight}
            />

            <div class="relative text-[1rem] tracking-[0.02em] capitalize">
              Add New Container
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          class="m-0 w-[57.44rem] rounded-3xl bg-white flex flex-col items-center justify-start pt-[2.13rem] pb-[2.75rem] pr-[2.81rem] pl-[2.75rem] box-border relative gap-[1.56rem] max-w-full z-[2] mq1050:pl-[1.38rem] mq1050:pr-[1.38rem] mq1050:box-border mq750:pt-[1.38rem] mq750:pb-[1.81rem] mq750:box-border"
        >
          <div class="w-[24.44rem] h-[5.13rem] relative hidden max-w-full z-[0]">
            <div class="absolute w-full top-[1.81rem] right-[0rem] left-[0rem] rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-300"></div>
            <div class="absolute top-[3.31rem] right-[1rem] w-[1rem] h-[0.63rem]">
              <div class="absolute top-[0rem] right-[0rem] text-[1.13rem] leading-[0.63rem] font-font-awesome-6-pro text-bodytext-50 text-left inline-block w-full h-full">
                
              </div>
            </div>
            <div class="absolute top-[2.81rem] left-[1rem] text-[0.88rem] leading-[1.25rem] font-manrope text-bodytext-50 text-left">
              role
            </div>
            <div class="absolute top-[0.25rem] left-[0.5rem] text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-manrope text-bodytext-50 text-left">
              role
            </div>
          </div>
          <div class="w-[57.44rem] h-[36rem] relative rounded-3xl bg-white hidden max-w-full z-[1]"></div>
          <div class="w-[0rem] h-[1.25rem] absolute my-0 mx-[!important] bottom-[2.13rem] left-[16.38rem] text-[0.88rem] leading-[1.25rem] capitalize font-manrope text-bodytext-50 text-left inline-block z-[3]"></div>
          <div class="flex flex-row items-start justify-start py-[0rem] pr-[0.38rem] pl-[0rem] box-border max-w-full">
            <div class="flex flex-col items-center justify-start max-w-full">
              <img
                class="w-[2.15rem] h-[1.94rem] relative z-[4]"
                loading="eager"
                alt=""
                src={logo}
              />

              <h3 class="m-0 relative text-[1.25rem] leading-[2.5rem] capitalize font-medium font-poppins text-darkslategray-200 text-left z-[3] mq450:text-[1rem] mq450:leading-[2rem]">
                Add Container
              </h3>
              <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 whitespace-pre-wrap text-center z-[4]">
                Improve business performance with Comvi dashboards
              </div>
            </div>
          </div>
          <div class="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
            <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2.69rem] max-w-full mq450:gap-[2.69rem]">
              <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm font-medium text-bodytext-50 dark:text-white"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div class="w-full flex-1 flex flex-col items-start justify-start px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm font-medium text-bodytext-50 dark:text-white"
                >
                  SELECT PROJECT
                </label>
                <FormControl fullWidth>
                  <Select
                    labelId="role-select-label"
                    id="role-select"
                    value={seletedProjectId}
                    onChange={handleRoleChange}
                    displayEmpty
                    sx={{
                      backgroundColor: "rgb(249 250 251)", // bg-gray-50 equivalent
                      borderColor: "rgb(209 213 219)", // border-gray-300 equivalent
                      color: "rgb(17 24 39)", // text-gray-900 equivalent
                      height: "3.13rem",
                      fontSize: "0.875rem",
                      borderRadius: "0.375rem",
                      padding: "0.625rem",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black", // focus:ring-coral-100 equivalent
                      },
                      ".MuiSvgIcon-root": {
                        color: "rgb(17 24 39)", // text-gray-900 equivalent for the dropdown icon
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select Project
                    </MenuItem>
                    {projects.map((project) => (
                      <MenuItem key={project.id} value={project.id}>
                        {project.id} - {project.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>

            <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2.69rem] max-w-full mq450:gap-[2.69rem]">
              <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm uppercase font-medium text-bodytext-50 dark:text-white"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm uppercase font-medium text-bodytext-50 dark:text-white"
                >
                  Volume
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Volume"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2.69rem] max-w-full mq450:gap-[2.69rem]">
              <div class="flex-1  flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm font-medium text-bodytext-50 dark:text-white"
                >
                  Network
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Name"
                  value={network}
                  onChange={(e) => setNetwork(e.target.value)}
                  required
                />
              </div>
              <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm uppercase font-medium text-bodytext-50 dark:text-white"
                >
                  Hostname
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="IDE"
                  value={hostname}
                  onChange={(e) => setHostname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2.69rem] max-w-full mq450:gap-[2.69rem]">
              <div class="flex-1  flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm font-medium text-bodytext-50 dark:text-white"
                >
                  Ip
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Ip"
                  value={ip}
                  onChange={(e) => setIp(e.target.value)}
                  required
                />
              </div>
              <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm uppercase font-medium text-bodytext-50 dark:text-white"
                >
                  Ports
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Ports"
                  value={port}
                  onChange={(e) => setPort(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2.69rem] max-w-full mq450:gap-[2.69rem]">
              <div class="flex-1  flex flex-col items-start justify-centor w-1/2 pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm font-medium text-bodytext-50 dark:text-white"
                >
                  Endpoint
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Endpoint"
                  value={endPoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  required
                />
              </div>
              <div class="flex-1  flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm font-medium text-bodytext-50 dark:text-white"
                >
                  Image
                </label>
                <FormControl fullWidth>
                  <Select
                    labelId="role-select-label"
                    id="role-select"
                    value={seletedImageId}
                    onChange={handleImageChange}
                    displayEmpty
                    sx={{
                      backgroundColor: "rgb(249 250 251)", // bg-gray-50 equivalent
                      borderColor: "rgb(209 213 219)", // border-gray-300 equivalent
                      color: "rgb(17 24 39)", // text-gray-900 equivalent
                      height: "3.13rem",
                      fontSize: "0.875rem",
                      borderRadius: "0.375rem",
                      padding: "0.625rem",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black", // focus:ring-coral-100 equivalent
                      },
                      ".MuiSvgIcon-root": {
                        color: "rgb(17 24 39)", // text-gray-900 equivalent for the dropdown icon
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                     Select Image
                    </MenuItem>
                    {images.map((image) => (
                      <MenuItem key={image.id} value={image.id}>
                        {image.id} - {image.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* <input */}
                {/* type="text" */}
                {/* id="name" */}
                {/* class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" */}
                {/* placeholder="Image" */}
                {/* value={image} */}
                {/* onChange={(e) => setImage(e.target.value)} */}
                {/* required */}
                {/* /> */}
              </div>
            </div>
          </div>
          <div class="w-[26.63rem] flex flex-row items-start justify-start py-[0rem] pr-[2.19rem] pl-[0rem] box-border max-w-full">
            <button
              type="submit"
              class="cursor-pointer [border:none] p-[0.94rem] bg-coral-100 flex-1 rounded-lg flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap z-[4] hover:bg-chocolate-100"
            >
              <div class="h-[3.13rem] w-[24.44rem] relative rounded-lg bg-coral-100 hidden max-w-full"></div>
              <b class="relative text-[0.88rem] leading-[1.25rem] capitalize font-poppins text-white text-left z-[1]">
                Add Container
              </b>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddNewContainer;
